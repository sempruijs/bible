use crate::app::bible::*;

#[derive(Clone)]
pub enum App {
    Bible(BibleState),
    Welcome,
}
