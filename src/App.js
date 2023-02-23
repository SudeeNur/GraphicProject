import React, {useEffect, useState} from 'react';
import Area from "./components/Area";
import ChartItem from "./components/ChartItem";
function App() {
  const getRandomNumber=()=>{
    return Math.floor(Math.random()*100+1) 
    // durmadan 1 ile 100 arasında bir değer almasını istiyoruz. ve random number fonksiyonu bu şekilde yazılır.
  }


  // var olan verileri görmek için useState kullanırız 
  const [barData, setBarData] = useState([
    {
      id: 1,
      title: "Facebook",
      color: "#4267B2",
      value: getRandomNumber(),
    },
    {
      id: 2,
      title: "Amazon",
      color: "#ff9900",
      value: getRandomNumber(),

    },
    {
      id: 3,
      title: "Youtube",
      color: "#FF0000",
      value: getRandomNumber(),


    },
    {
      id: 6,
      title: "Google",
      color: "#34a853",
      value: getRandomNumber(),


    },
    {
      id: 5,
      title: "Microsoft",
      color: "#F25022",
      value: getRandomNumber(),

    },

  ]);

  // amacımız en büyük datayı yukarıda tutmak amaçlanmıştır bu sebeple data.sort işlemi ile bu fonksiyon kullanılır.
  const findBigBarItem=(data)=>{
    return  data.sort((val1,val2)=>val2.value-val1.value)[0].value
  } //data2nin value'sı ile data1 in value'sını çıkartıp değerini getir.
 
  // burda da farkları tutan bir const yazıyoruz.
  const [bigBarData,setBigBarData]=useState(findBigBarItem(barData))

  const setBarDataWithRandom=()=>{
    let data=[...barData]
    data.forEach((item)=>{
      item.value+=getRandomNumber()
    })
    setBigBarData(findBigBarItem(data))
    setBarData(data)
  }
 // verilerdeki en küçük değiişiklikleri görebilmek için useeffect kullanılır.
  useEffect(()=>{
    let timer;
    timer=setInterval(()=>{
      setBarDataWithRandom()
    },500) // yarım saniyede güncelleme işlemi 
  },[])

  const renderBarItem=(item,index)=>{
    let rate=item.value/bigBarData
    rate=rate * (1000 - 40)
    const percent=(rate*100)/1040
    return <ChartItem
      key={item.id}
      backgroundColor={item.color}
      width={percent+"%"}
      text={item.title}
      count={item.value}
      top={(index===0?10:(index*40)+20)+'px'} //indek =0 ise 10 değilse 40la çarp 20 ekle
// props olarak göndermek için değerlere atama yapıyoruz.
    />
  }

  return (
      <>
        <div className="app-title">Firmaların Müşteri Sayıları</div>

        <Area  data={barData}>
          {barData.map((item,index)=>renderBarItem(item,index))}
        </Area>
      </>);
}

export default App;










