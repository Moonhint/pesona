export default {
  // todo: make it not only about from rgb to hex
  toHex: (rgb) => {
    var isHEX  = /^#[0-9A-F]{6}$/i.test(rgb);
  
    if (isHEX){
      return rgb;
    }else{
      rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
      return (rgb && rgb.length === 4) ? "#" +
       ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
       ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
       ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
    }
   }
}