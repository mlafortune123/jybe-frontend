export const Carousel = (selectedCarousel) => {
  switch (selectedCarousel.props) {
    case 1: return (
      <div className="frame-37">
        <img src="/hiw1.png" className="hiw" />
      </div>
    )
    case 2: return (
      <div className="frame-37">
        <img src="/hiw2.png" className="hiw" />
      </div>
    )
    case 3: return (

      <div className="frame-37">
        <img src="/hiw3.png" className="hiw" />
      </div>
    )
    case 4: return (
      <div className="frame-37">
        <img src="/hiw4.png" className="hiw" />
      </div>
    )
  }
}