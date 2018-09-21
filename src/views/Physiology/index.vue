<template>
  <Row>

  <Col :span="24">
    <chart :options="option" class="echarts"></chart>

  </Col>
  </Row>
</template>

<style scoped>
.echarts {
  height: 700px;
  width: 100%;
  border-radius: 25px;
}

</style>

<script>
var xData = function() {
    var data = [];
    for (var i = 1; i <= 24; i += 2) {
        data.push(i + ":00");
    }
    return data;
}();
var yData = function () {
    var data = [];
    for (var i = 60; i <= 120; i += 5) {
        data.push(i);
    }
    return data;
};
export default {
  data: function () {
    return {
        option : {
            backgroundColor: "#344b58",
            "title": {
                "text": "心率数据表",
                x: "4%",

                textStyle: {
                    color: '#fff',
                    fontSize: '22'
                },
                subtextStyle: {
                    color: '#90979c',
                    fontSize: '16',

                },
            },
            "tooltip": {
                "trigger": "axis",
                "axisPointer": {
                    "type": "shadow",
                    textStyle: {
                        color: "#fff"
                    }

                },
            },
            "grid": {
                "borderWidth": 0,
                "top": 110,
                "bottom": 95,
                textStyle: {
                    color: "#fff"
                }
            },
            "legend": {
                x: '4%',
                top: '11%',
                textStyle: {
                    color: '#90979c',
                },
                "data": ['心率']
            },
             

            "calculable": true,
            "xAxis": [{
                "type": "category",
                "axisLine": {
                    lineStyle: {
                        color: '#90979c'
                    }
                },
                "splitLine": {
                    "show": false
                },
                "axisTick": {
                    "show": false
                },
                "splitArea": {
                    "show": false
                },
                "axisLabel": {
                    "interval": 0,

                },
                "data": xData,
            }],
            "yAxis": [{
                "type": "category",
                "splitLine": {
                    "show": false
                },
                "axisLine": {
                    lineStyle: {
                        color: '#90979c'
                    }
                },
                "axisTick": {
                    "show": false
                },
                "axisLabel": {
                    "interval": 0,

                },
                "splitArea": {
                    "show": false
                },
                "data": yData,

            }],
            "dataZoom": [{
                "show": true,
                "height": 30,
                "xAxisIndex": [
                    0
                ],
                bottom: 30,
                "start": 10,
                "end": 80,
                handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
                handleSize: '110%',
                handleStyle:{
                    color:"#d3dee5",
                    
                },
                   textStyle:{
                    color:"#fff"},
                   borderColor:"#90979c"
                
                
            }, {
                "type": "inside",
                "show": true,
                "height": 15,
                "start": 1,
                "end": 35
            }],
            "series": [
                {
                    "name": "心率",
                    "type": "line",
                    "stack": "总量",
                    symbolSize:10,
                    symbol:'circle',
                    "itemStyle": {
                        "normal": {
                            "color": "rgba(252,230,48,1)",
                            "barBorderRadius": 0,
                            "label": {
                                "show": true,
                                "position": "top",
                                formatter: function(p) {
                                    return p.value > 0 ? (p.value) : '';
                                }
                            }
                        }
                    },
                    "data": [
                        103,
                        110,
                        111,
                        100,
                        99,
                        101,
                        100,
                        98,
                        97,
                        96,
                        94,
                        93
                    ],
                }

             ]
        }
    }
  }
}
</script>