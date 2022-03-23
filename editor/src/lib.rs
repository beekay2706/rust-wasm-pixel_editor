use wasm_bindgen::prelude::*;



// When the `wee_alloc` feature is enabled, this uses `wee_alloc` as the global
// allocator.
//
// If you don't want to use `wee_alloc`, you can safely delete this.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

// #[derive(Clone, Copy)]
// pub struct Rgb {
//     r:u8,
//     g:u8,
//     b:u8,
// }
#[wasm_bindgen(constructor)]
 pub struct Image {
    width: usize,
    height: usize,
}
#[wasm_bindgen]
impl Image {
    #[wasm_bindgen(constructor)]
   pub fn new(width: usize, height: usize) -> Image {
       Image{width, height}
   } 
   pub fn width(&self) -> usize {
    self.width
}
pub fn height(&self) -> usize {
    self.height
}

} 
// #[wasm_bindgen]
// impl Imag e {
//     #[wasm_bindgen(constructor)]
//    pub fn new(width: usize, height: usize) -> Image {
//     //    let mut cells = Vec::new();
//     //    cells.resize(
//     //        width * height,
//     //         Rgb{
//     //            r:200,
//     //            g:200,
//     //            b:255,
//     //        },
//     //    );
//         Image{ 
//             width, 
//             height,
//             // cells
//          }
//     // }
//     // pub fn cells(&self) -> Vec<u8> {
//     //     self.cells
//     //     .iter()
//     //     .map(|&rgb| vec![rgb.r, rgb.g, rgb.b])
//     //     .collect::<Vec<Vec<u8>>>()
//     //     .concat()
//      }
    
// }
