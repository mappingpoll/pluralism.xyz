use serde::Deserialize;

use std::collections::HashMap;
use std::error::Error;
use std::fs::File;
use std::io::BufReader;
use std::path::Path;

const QUESTIONS: [&str; 24] = [
    "2", "3", "5", "6", "7", "8", "9", "10", "12", "13", "14", "15", "16", "17", "18", "19", "21",
    "22", "23", "24", "25", "26", "28", "29",
];

const MIN_LENGTH: f32 = 0.04;
const MIN_RANGE: Range = [-MIN_LENGTH / 2., MIN_LENGTH / 2.];

#[derive(Deserialize, Debug)]
struct RawDatum {
    user: String,
    comment: Option<String>,
    points: HashMap<String, Vec<f32>>,
}

fn read_data_from_file<P: AsRef<Path>>(path: P) -> Result<Vec<RawDatum>, Box<dyn Error>> {
    // Open the file in read-only mode with buffer.
    let file = File::open(path)?;
    let reader = BufReader::new(file);

    let data: Vec<RawDatum> = serde_json::from_reader(reader)?;

    Ok(data)
}

type Range = [f32; 2];

struct Datum {
    user: String,
    ranges: HashMap<String, Range>,
}

type Data = Vec<Datum>;

#[derive(Clone, Default)]
struct Point {
    x: f32,
    y: f32,
}

fn clean_data(raw_data: &[RawDatum]) -> Vec<Datum> {
    raw_data
        .iter()
        .map(|r| {
            let points = r.points.to_owned();
            Datum {
                user: r.user.clone(),
                ranges: points
                    .into_iter()
                    .map(|(q, v)| {
                        let mut range = [0., 0.];
                        if v.len() == 2 {
                            range[0] = v[0];
                            range[1] = v[1];
                        } else if v.len() == 1 {
                            range[0] = v[0] - MIN_LENGTH / 2.;
                            range[1] = range[0] + MIN_LENGTH;
                        }
                        (q, range)
                    })
                    .collect::<HashMap<String, Range>>(),
            }
        })
        .collect()
}

#[derive(Clone, Default)]
struct Rectangle {
    bottom_left: Point,
    top_right: Point,
    width: f32,
    height: f32,
    area: f32,
    layer: u32,
    user: String,
}

impl Rectangle {
    fn from_ranges(x: &Range, y: &Range, user: &str) -> Rectangle {
        let bottom_left = Point { x: x[0], y: y[0] };
        let top_right = Point { x: x[1], y: y[1] };
        let mut r = Rectangle {
            bottom_left,
            top_right,
            user: user.to_owned(),
            ..Default::default()
        };
        r.measure();
        r
    }

    fn from_corners(bottom_left: Point, top_right: Point, user: &str) -> Rectangle {
        let mut r = Rectangle {
            bottom_left,
            top_right,
            user: user.to_owned(),
            ..Default::default()
        };
        r.measure();
        r
    }

    fn measure(&mut self) {
        self.width = self.top_right.x - self.bottom_left.x;
        self.height = self.top_right.y - self.bottom_left.y;
        self.area = self.width * self.height;
    }

    fn overlaps(&self, other: &Rectangle) -> bool {
        !(self.bottom_left.x >= other.top_right.x
            || self.top_right.x <= other.bottom_left.x
            || self.bottom_left.y >= other.top_right.y
            || self.top_right.y <= other.bottom_left.y)
    }

    fn covers(&self, other: &Rectangle) -> bool {
        self.bottom_left.x < other.bottom_left.x
            && self.bottom_left.y < other.bottom_left.y
            && self.top_right.x > other.top_right.x
            && self.top_right.y > other.top_right.y
    }

    fn equals(&self, other: &Rectangle) -> bool {
        self.bottom_left.x == other.bottom_left.x
            && self.top_right.x == other.top_right.x
            && self.bottom_left.y == other.bottom_left.y
            && self.top_right.y == other.top_right.y
    }

    fn intersect(&self, other: &Rectangle) -> Option<Rectangle> {
        if self.overlaps(other) {
            let bottom_left = Point {
                x: self.bottom_left.x.max(other.bottom_left.x),
                y: self.bottom_left.y.max(other.bottom_left.y),
            };
            let top_right = Point {
                x: self.top_right.x.min(other.top_right.x),
                y: self.top_right.y.min(other.top_right.y),
            };
            let layer = self.layer.max(other.layer) + 1;

            let mut r = Rectangle::from_corners(bottom_left, top_right, &self.user);

            r.layer = layer;

            Some(r)
        } else {
            None
        }
    }
}

fn make_rectangles(data: &Data) -> HashMap<String, Vec<Rectangle>> {
    let mut rectangle_table = HashMap::new();
    for x in QUESTIONS {
        for y in QUESTIONS {
            let name = format!("{x}-{y}");
            let mut rectangles = data
                .iter()
                .fold(Vec::new(), |acc: Vec<Rectangle>, d: &Datum| {
                    let xr = d.ranges.get(x).unwrap_or(&MIN_RANGE);
                    let yr = d.ranges.get(y).unwrap_or(&MIN_RANGE);
                    [acc, ([Rectangle::from_ranges(xr, yr, &d.user)]).to_vec()].concat()
                });
            rectangles.sort_unstable_by(|a, b| a.area.partial_cmp(&b.area).unwrap());
            rectangles = intersect_rectangles(&rectangles);
            println!("{x} {y}: {}", rectangles.len());
            rectangle_table.insert(name, rectangles);
        }
    }
    rectangle_table
}

fn intersect_rectangles(rectangles: &[Rectangle]) -> Vec<Rectangle> {
    let mut stack: Vec<Rectangle> = Vec::new();
    let mut intersections = Vec::new();
    for r in rectangles {
        'stackloop: for s in &stack {
            if let Some(i) = s.intersect(&r) {
                for q in &stack {
                    if q.equals(&i) && q.layer <= i.layer {
                        q.layer = i.layer;
                        continue 'stackloop
                    }
                }
                intersections.push(i);
            }
        }
        stack.push(r.to_owned());
        stack.append(&mut intersections);
    }
    stack
}

fn main() {
    let raw_data = read_data_from_file("../assets/results2021/data.json").unwrap();

    let clean_data = clean_data(&raw_data);

    let rectangles = make_rectangles(&clean_data);
}
