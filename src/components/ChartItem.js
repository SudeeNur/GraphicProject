const ChartItem = (props) => {
    return (
        // top kısmını yani yüksekliğini props.topdan al genişliği de öyle
        <div className="app-chart-item-wrapper" style={{top:props.top,width:props.width}}>

            <div className="app-chart-item" style={{backgroundColor:props.backgroundColor}}>
                {props.text}
            </div>

            <div className="app-chart-text">
                {props.count}
            </div>
        </div>
    )
}
export default ChartItem