window.addEventListener("load",function(){
    let main = document.querySelectorAll(".container");

    let bar = echarts.init(main[0]);
    let barOption = {
        title: {
            text: 'ECharts 入门示例',
            // show: false,
            textStyle:{
                color:"#00c1de",
                fontSize:20,
                fontWeight:0,
                fontStyle:"oblique",
                textShadowColor:"#333"
            }
        },
        tooltip: {},
        legend: {
            data:['销量'],
        },
        xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    };
    bar.setOption(barOption);

    let line = echarts.init(main[1]);
    let lineOption = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
        }]
    };
    line.setOption(lineOption);

    let pie = echarts.init(main[2]);
    let pieOption = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data:['男','女']
        },
        series: [
            {
                name:'访问来源',
                type:'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:18, name:'女'},
                    {value:38, name:'男'},
                ]
            }
        ]
    };
    pie.setOption(pieOption);

},false)