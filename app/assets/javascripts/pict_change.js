$(function() {

  var path = ""

  $(window).on('load',function(){ 
    // パスの取得
    path = location.pathname
  })

  // トップページ用変数定義
  var top_num = 0;
  var top_pics_src = new Array(
    "top-banner-camp-4f3fd88c685e8932d7dde2ad3a8336ba-419a49ec249c2410ee1eb5ea8a6d058df68f25d5cbf34d97c1f6f55e4c0f9899.jpg",
    "sns-1.jpg",
    "tree-2916763_1280.jpg");

  function slideshow_timer(){
    if (path == "/") {
      if (top_num == 2){
          top_num = 0;
      } 
      else {
        top_num ++;
      }
      document.getElementById("mypic").src=`/assets/${top_pics_src[top_num]}`;
    }
  }

  // トップページの画像切り替え-prev
  $(document).on("click", ".prevbtn", function(){
    
    if (top_num == 2) {
      top_num = 0;
    } else {
      top_num ++;
    }
    document.getElementById("mypic").src=`/assets/${top_pics_src[top_num]}`;
  })

  // トップページの画像切り替え-next
  $(document).on("click", ".nextbtn", function(){
    
    if (top_num == 0) {
      top_num = 2;
    } else {
      top_num --;
    }
    document.getElementById("mypic").src=`/assets/${top_pics_src[top_num]}`;
  })

  
  setInterval(slideshow_timer, 10000);
  
  

  
  // 商品詳細ページの画像切り替え
  $('.left__down__iir__gffk__image').hover(function() {
    console.log(this)
    
    var item_id = this.id
    var img_src = this.src
    console.log(img_src)
    //マウスを乗せたら画像が切り替わる
    $('.slide__box__image3').attr('src', img_src);;
 
  });


});

