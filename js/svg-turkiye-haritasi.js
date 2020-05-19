/*! SVG Türkiye Haritası | jQuery | MIT Lisans | dnomak.com */

function svgturkiyeharitasi() {
  $("#svg-turkiye-haritasi path").hover(function() {
    const $this = $(this)
    if ($this.parent().attr("id") == "guney-kibris") return false;
    $(".il-isimleri").html(`<div>${$this.parent().data("iladi")}</div>`);
    
    $this.on("mousemove", e => {
      $(".il-isimleri").css({
        "top": e.pageY + 25,
        "left": e.pageX
      })
    })

  },() => $(".il-isimleri").html(""));

  $("#svg-turkiye-haritasi path").on("click", function() {
    const $this = $(this)
    if ($this.parent().attr("id") == "guney-kibris") return false;
    let ilId = $this.parent().attr("id");
    let ilAdi = $this.parent().data("iladi");
    let plakaKodu = $this.parent().data("plakakodu");
    let alanKodu = $this.parent().data("alankodu");
    window.location = "#" + ilId + "-" + plakaKodu;
  });
}
