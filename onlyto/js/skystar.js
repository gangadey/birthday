// poem
var words=[
    '吴昭铁 青春正当时',
    '吴昭铁 梦想展翅飞',
    '吴昭铁 未来皆可期',
    '吴昭铁 意气正风发',
    '吴昭铁 心中有山海',
    '吴昭铁 眼里有星光',
    '吴昭铁 岁岁皆欢愉',
    '吴昭铁 年年有惊喜',
    '吴昭铁 保持热爱',
    '吴昭铁 奔赴山海',
    '吴昭铁 前程似锦',
    '吴昭铁 未来可期',
    '吴昭铁 乘风破浪',
    '吴昭铁 光芒万丈',
    '吴昭铁 保持好奇',
    '吴昭铁 探索世界',
    '吴昭铁 永远少年',
    '吴昭铁 赤诚勇敢',
    '吴昭铁 温暖纯良',
    '吴昭铁 不舍爱与自由',
    '吴昭铁 遇见美好',
    '吴昭铁 遇见幸运',
    '吴昭铁 遇见更好的自己',
    '吴昭铁 活成自己想要的样子',
    '吴昭铁 被世界温柔以待',
    '吴昭铁 每一天都闪闪发光',
    '吴昭铁 所求皆如愿',
    '吴昭铁 所行化坦途',
    '吴昭铁 多喜乐',
    '吴昭铁 长安宁',
    '吴昭铁 有趣有盼',
    '吴昭铁 无灾无难',
    '吴昭铁 生活明朗',
    '吴昭铁 万物可爱',
    '吴昭铁 人间值得',
    '吴昭铁 未来可期',
    '吴昭铁 不负韶华',
    '吴昭铁 自在如风',
    '吴昭铁 永远年轻',
    '吴昭铁 热泪盈眶',
    '吴昭铁 清澈明朗',
    '吴昭铁 永怀善意',
    '吴昭铁 成为自己的太阳',
    '吴昭铁 照亮自己的路',
    '吴昭铁 心中有火',
    '吴昭铁 眼里有光',
    '吴昭铁 脚下有路',
    '吴昭铁 笔下有神',
    '吴昭铁 学业有成',
    '吴昭铁 万事顺意',
    '吴昭铁 友谊长存',
    '吴昭铁 快乐无限',
    '吴昭铁 勇敢追梦',
    '吴昭铁 不负热爱',
    '吴昭铁 青春万岁',
    '吴昭铁 永远21岁'
];
function randomNum(min,max){
    var num = (Math.random()*(max-min+1)+min).toFixed(2);
    return num;
}
function init(){
    let container = document.querySelector('.container');
    let f = document.createDocumentFragment();
    words.forEach(w=>{
    let word_box = document.createElement('div');
    let word = document.createElement('div');
        word.innerText = w;
        word.classList.add('word');
        word.style.color = '#BAABDA';
        word.style.fontFamily = '楷体';
        word.style.fontSize = '20px'
        word_box.classList.add('word-box');
        word_box.style.setProperty("--margin-top",randomNum(-40,20)+'vh');
        word_box.style.setProperty("--margin-left",randomNum(6,35)+'vw');
        word_box.style.setProperty("--animation-duration",randomNum(8,20)+'s');
        word_box.style.setProperty("--animation-delay",randomNum(-20,0)+'s');
        
        word_box.appendChild(word);
        f.appendChild(word_box);


    })
    container.appendChild(f);
}
window.addEventListener('load',init);
let textone = document.querySelector('.textone').querySelector('h1');
      let texttwo = document.querySelector('.texttwo').querySelector('h1');
      let textthree = document.querySelector('.textthree').querySelector('h1');

      setTimeout(function(){
        textone.innerHTML = '生辰快乐，漫天繁星为你闪耀';
          textone.style.color = '#E8F9FD';
          textone.style.fontFamily = '楷体'
          texttwo.style.color = '#E8F9FD';
          texttwo.style.fontFamily = '楷体'
          textthree.style.color = '#E8F9FD';
          textthree.style.fontFamily = '楷体'
          texttwo.innerHTML = '';
      },28000)
      setTimeout(function(){
        textone.innerHTML = '一岁一礼';
        texttwo.innerHTML = '一寸欢喜';
        textthree.innerHTML = '生辰吉乐 万事可期';
      },112500)