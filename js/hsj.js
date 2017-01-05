/**
 * Created by admin on 16/8/24.
 */
function top_left() {
    var top_left=echarts.init(document.getElementById('top_left'));
    $.getJSON("./json/top_left.json",function(left){
        var left_value=Object.keys(left).map(function (key){
            return { name: key, value: left[key] };
        });
        var left_label=Object.keys(left).map(function (key){
            return { name: key };
        });
        var lineStyle = {
            normal: {
                width: 1,
                opacity: 0.5
            }
        };

        option = {
            radar: {
                indicator: [
                    {name: '信息服务', max: 100},
                    {name: '助航服务', max: 100},
                    {name: '交通组织', max: 100},
                    {name: '支持联合行动', max: 100},
                    {name: '应急处置等', max: 100},
                    {name: '综合管理', max: 100},
                ],
                radius:"65%",
                shape: 'circle',
                splitNumber: 5,
                name: {
                    textStyle: {
                        color: 'rgb(238, 197, 102)'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: [
                            'rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)',
                            'rgba(238, 197, 102, 0.4)', 'rgba(238, 197, 102, 0.6)',
                            'rgba(238, 197, 102, 0.8)', 'rgba(238, 197, 102, 1)'
                        ].reverse()
                    }
                },
                splitArea: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(238, 197, 102, 0.5)'
                    }
                }
            },
            series: [
                {
                    name: '北京',
                    type: 'radar',
                    lineStyle: lineStyle,
                    data: left_value,
                    itemStyle: {
                        normal: {
                            color: '#F9713C'
                        }
                    },
                    areaStyle: {
                        normal: {
                            opacity: 0.1
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            formatter:function(params) {
                                return params.value;
                            }
                        }
                    },
                },
            ]
        };
        top_left.setOption(option);
    });
}
function top_bing() {
    var top_bing=echarts.init(document.getElementById('top_bing'));
    $.getJSON("./json/top_bing.json",function(left){
        var value=Object.keys(left).map(function (key){
            return { name: key, value: left[key] };
        });
        var label=Object.keys(left).map(function (key){
            return { name: key };
        });
        option = {
            color: [
                '#92d3b5','#556991','#51b1af','#d38264',
                '#af9089','#b32125','80cca6'
            ],
            legend: {
                orient: 'vertical',
                x: '140px',
                y:'bottom',
                data:label,
                textStyle: {
                    color: 'auto',
                },
                itemWidth:12,
                itemHeight:12,
                itemGap:5,
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            series : [
                {
                    name:'访问来源',
                    type:'pie',
                    center:['50%','40%'],
                    radius : '50%',
                    itemStyle : {
                        normal : {
                            label : {
                                position : 'outer',
                                formatter :"{c}\n{d}%"
                            },
                            labelLine : {
                                show : true,
                            }
                        },
                        emphasis : {
                            label : {
                                show : true,
                                formatter :"{c}\n{d}%"
                            }
                        },
                    },
                    data:value
                }
            ]
        };

        top_bing.setOption(option);

    });
}
function bottom_zhu() {
    var bottom_zhu = echarts.init(document.getElementById('bottom'));

    option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: ['信息服务', '助航服务','助航服务','联合行动','应急处理'
                ,'综合管理'],
            textStyle: {
                color: 'auto',
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis:  {
            type: 'category',
            data: ['周一','周二','周三','周四','周五','周六','周日'],
            axisLabel: {
                how: true,
                interval:0,
                margin:2,
                textStyle: {
                    color: '#fff'
                }
            }
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                how: true,
                interval:0,
                margin:2,
                textStyle: {
                    color: '#fff'
                }
            }
        },

        series: [

            {
                name: '信息服务',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#C1232B'
                    }
                },
                data: [320, 302, 301, 334, 390, 330, 320]
            },
            {
                name: '助航服务',
                type: 'bar',
                stack: '总量',
                itemStyle: {
                    normal: {
                        color: '#B5C334'
                    }
                },
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '助航服务',
                type: 'bar',
                stack: '总量',
                itemStyle: {
                    normal: {
                        color: '#FCCE10'
                    }
                },
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: '联合行动',
                type: 'bar',
                stack: '总量',
                itemStyle: {
                    normal: {
                        color: '#E87C25'
                    }
                },
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [150, 212, 201, 154, 190, 330, 410]
            },
            {
                name: '应急处理',
                type: 'bar',
                stack: '总量',
                itemStyle: {
                    normal: {
                        color: '#27727B'
                    }
                },
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [820, 832, 901, 934, 1290, 1330, 1320]
            },
            {
                name: '综合管理',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#C1232B'
                    }
                },
                data: [320, 302, 301, 334, 390, 330, 320]
            }
        ]
    };
    bottom_zhu.setOption(option);
}
function top_left_bing(number) {
    if (number){
        var lujing_left="./json/center_left"+number+".json";
        var lujing_center="./json/center_center"+number+".json";
        var lujing_right="./json/center_right"+number+".json";
    }
    var center_left=echarts.init(document.getElementById('center_left'));
    var center_center=echarts.init(document.getElementById('center_center'));
    var center_right=echarts.init(document.getElementById('center_right'));
    $.getJSON(lujing_left,function(data){
        var value=Object.keys(data).map(function (key){
            return { name: key, value: data[key] };
        });
        var label=Object.keys(data).map(function (key){
            return { name: key };
        });
        var dataStyle = {
            normal : {
                label : {
                    position : 'outside',
                    formatter : "{d}%",
                    textStyle: {
                        color: '#ffffff',
                    }
                },
                labelLine : {
                    show : true,
                    length:5,
                    length2:0.8,
                },
            },
            emphasis : {
                label : {
                    show : true,
                    formatter : "{b}\n{d}%"
                }
            },
        };
        var placeHolderStyle = {
            normal : {
                color: 'rgba(0,0,0,0)',
                label: {show:false},
                labelLine: {show:false}
            },
            emphasis : {
                color: 'rgba(0,0,0,0)'
            }
        };

        option = {
            title: {
                textStyle : {
                    color : 'rgba(30,144,255,0.8)',
                    fontFamily : '微软雅黑',
                    fontSize : 25,
                    fontWeight : 'bolder',
                }
            },
            color: [
                '#7188ac','#e4ba64','#de9d49',
            ],
            tooltip : {
                show: true,
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient : 'vertical',
                x : "center",
                y :"bottom",
                itemGap:5,
                data:label,
                formatter:'{name}',
                textStyle: {
                    color: 'auto',
                }
            },
            series : [
                {
                    name:'1',
                    type:'pie',
                    radius : [50, 60],
                    itemStyle : dataStyle,
                    data:[
                        {
                            value:value[2].value[0],
                            name:value[2].name
                        },
                        {
                            value:30,
                            name:'invisible',
                            itemStyle : placeHolderStyle
                        }
                    ]
                },
                {
                    name:'2',
                    type:'pie',
                    clockWise:false,
                    radius : [40, 50],
                    itemStyle : dataStyle,
                    data:[
                        {
                            value:value[1].value[0],
                            name:value[1].name
                        },
                        {
                            value:50,
                            name:'invisible',
                            itemStyle : placeHolderStyle
                        }
                    ]
                },
                {
                    name:'3',
                    type:'pie',
                    clockWise:true,
                    radius : [30, 40],
                    itemStyle : {
                        normal : {
                            label : {
                                position : 'outside',
                                formatter : "{c}",
                                textStyle: {
                                    color: '#ffffff',
                                }
                            },
                            labelLine : {
                                show : false,
                                length:-35,
                                length2:2,
                            },
                        },
                        emphasis : {
                            label : {
                                show : true,
                                formatter : "{b}\n{d}%"
                            }
                        },
                    },
                    data:[
                        {
                            value:value[0].value[0],
                            name:value[0].name
                        },
                        {
                            value:50,
                            name:'invisible',
                            itemStyle : placeHolderStyle
                        }
                    ]
                }
            ]
        };


        center_left.setOption(option);
    });
    $.getJSON(lujing_center,function(data){
        var value=Object.keys(data).map(function (key){
            return { name: key, value: data[key] };
        });
        var label=Object.keys(data).map(function (key){
            return { name: key };
        });
        var dataStyle = {
            normal : {
                label : {
                    position : 'outside',
                    formatter : "{d}%",
                    textStyle: {
                        color: '#ffffff',
                    }
                },
                labelLine : {
                    show : true,
                    length:5,
                    length2:0.8,
                },
            },
            emphasis : {
                label : {
                    show : true,
                    formatter : "{b}\n{d}%"
                }
            },
        };
        var placeHolderStyle = {
            normal : {
                color: 'rgba(0,0,0,0)',
                label: {show:false},
                labelLine: {show:false}
            },
            emphasis : {
                color: 'rgba(0,0,0,0)'
            }
        };
        option = {
            title: {
                textStyle : {
                    color : 'rgba(30,144,255,0.8)',
                    fontFamily : '微软雅黑',
                    fontSize : 25,
                    fontWeight : 'bolder'
                }
            },
            color: [
                '#7188ac','#e4ba64','#de9d49',
            ],
            tooltip : {
                show: true,
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },

            legend: {
                orient : 'vertical',
                x : "center",
                y :"bottom",
                itemGap:5,
                data:label,
                textStyle: {
                    color: 'auto',
                }
            },
            series : [
                {
                    name:'1',
                    type:'pie',
                    clockWise:true,
                    radius : [50, 60],
                    itemStyle : dataStyle,
                    data:[
                        {
                            value:value[2].value[0],
                            name:value[2].name
                        },
                        {
                            value:30,
                            name:'invisible',
                            itemStyle : placeHolderStyle
                        }
                    ]
                },
                {
                    name:'2',
                    type:'pie',
                    clockWise:false,
                    radius : [40, 50],
                    itemStyle : dataStyle,
                    data:[
                        {
                            value:value[1].value[0],
                            name:value[1].name
                        },
                        {
                            value:50,
                            name:'invisible',
                            itemStyle : placeHolderStyle
                        }
                    ]
                },
                {
                    name:'3',
                    type:'pie',
                    clockWise:true,
                    radius : [30, 40],
                    itemStyle : {
                        normal : {
                            label : {
                                position : 'outside',
                                formatter : "{c}",
                                textStyle: {
                                    color: '#ffffff',
                                }
                            },
                            labelLine : {
                                show : false,
                                length:-35,
                                length2:2,
                            },
                        },
                        emphasis : {
                            label : {
                                show : true,
                                formatter : "{b}\n{d}%"
                            }
                        },
                    },
                    data:[
                        {
                            value:value[0].value[0],
                            name:value[0].name
                        },
                        {
                            value:50,
                            name:'invisible',
                            itemStyle : placeHolderStyle
                        }
                    ]
                }
            ]
        };


        center_center.setOption(option);
    });
    $.getJSON(lujing_right,function(data){
        var value=Object.keys(data).map(function (key){
            return { name: key, value: data[key] };
        });
        var label=Object.keys(data).map(function (key){
            return { name: key };
        });
        var dataStyle = {
            normal : {
                label : {
                    position : 'outside',
                    formatter : "{d}%",
                    textStyle: {
                        color: '#ffffff',
                    }
                },
                labelLine : {
                    show : true,
                    length:0.1,
                    length2:0.8,
                },
            },
            emphasis : {
                label : {
                    show : true,
                    formatter : "{b}\n{d}%"
                }
            },
        };
        var placeHolderStyle = {

            normal : {
                color: 'rgba(0,0,0,0)',
                label: {show:false},
                labelLine: {show:false}
            },
            emphasis : {
                color: 'rgba(0,0,0,0)'
            }
        };
        option = {
            title: {
                textStyle : {
                    color : 'rgba(30,144,255,0.8)',
                    fontFamily : '微软雅黑',
                    fontSize : 25,
                    fontWeight : 'bolder'
                }
            },
            tooltip : {
                show: true,
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            color: [
                '#7188ac','#e4ba64','#de9d49',
            ],
            legend: {
                orient : 'vertical',
                x : "center",
                y :"bottom",
                itemGap:5,
                data:label,
                textStyle: {
                    color: 'auto',
                }
            },
            series : [
                {
                    name:'1',
                    type:'pie',
                    clockWise:true,
                    radius : [50, 60],
                    itemStyle : dataStyle,
                    data:[
                        {
                            value:value[2].value[0],
                            name:value[2].name
                        },
                        {
                            value:30,
                            name:'invisible',
                            itemStyle : placeHolderStyle
                        }
                    ]
                },
                {
                    name:'2',
                    type:'pie',
                    clockWise:false,
                    radius : [40, 50],
                    itemStyle : dataStyle,
                    data:[
                        {
                            value:value[1].value[0],
                            name:value[1].name
                        },
                        {
                            value:50,
                            name:'invisible',
                            itemStyle : placeHolderStyle
                        }
                    ]
                },
                {
                    name:'3',
                    type:'pie',
                    clockWise:true,
                    radius : [30, 40],
                    itemStyle : {
                        normal : {
                            label : {
                                position : 'outside',
                                formatter : "{c}",
                                textStyle: {
                                    color: '#ffffff',
                                }
                            },
                            labelLine : {
                                show : false,
                                length:-35,
                                length2:2,
                            },
                        },
                        emphasis : {
                            label : {
                                show : true,
                                formatter : "{b}\n{d}%"
                            }
                        },
                    },
                    data:[
                        {
                            value:value[0].value[0],
                            name:value[0].name
                        },
                        {
                            value:50,
                            name:'invisible',
                            itemStyle : placeHolderStyle
                        }
                    ]
                }
            ]
        };


        center_right.setOption(option);
    });
}
function Orbing(number) {
    var Orbing=echarts.init(document.getElementById('top_bing'));
    var Orbingjson="./json/Orbing"+number+".json";
    $.getJSON(Orbingjson,function(left){
        var value=Object.keys(left).map(function (key){
            return { name: key, value: left[key] };
        });
        var label=Object.keys(left).map(function (key){
            return { name: key };
        });
        option = {
            color: [
                '#C1232B','#B5C334','#FCCE10','#E87C25',
                '#d38264','#80cca6'
            ],
            legend: {
                orient: 'vertical',
                x: '80px',
                y:'bottom',
                data:label,
                textStyle: {
                    color: 'auto',
                },
                itemWidth:12,
                itemHeight:12,
                itemGap:5,
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            series : [
                {
                    name:'访问来源',
                    type:'pie',
                    center:['60%','50%'],
                    radius : '70%',
                    itemStyle : {
                        normal : {
                            label : {
                                position : 'outer',
                                formatter :"{c}\n{d}%"
                            },
                            labelLine : {
                                show : true,
                            }
                        },
                        emphasis : {
                            label : {
                                show : true,
                                formatter :"{c}\n{d}%"
                            }
                        },
                    },
                    data:value
                }
            ]
        };

        Orbing.setOption(option);

    });
}
function bottom_zhe(number) {
    var bottom_zhe=echarts.init(document.getElementById('bottom'));
    if(number==1){
        $.getJSON("./json/bottom_zhe1.json",function(data){
            option = {
                color: [
                    '#c0504d','#4f81bd','#92d3b5'
                ],
                tooltip: {
                    trigger: "item",
                    formatter: "{a} <br/>{b} : {c}"
                },
                legend: {
                    x: "10px",
                    y: "30px",
                    data: ["信息广播", "信息提醒","应请求信息服务"],
                    textStyle: {
                        color: 'auto',
                    }
                },
                grid: { // 控制图的大小，调整下面这些值就可以，
                    x: 50,
                    x2: 50,
                    y2: 70,// y2可以控制 X轴跟Zoom控件之间的间隔，避免以为倾斜后造成 label重叠到zoom上
                },
                xAxis: [
                    {
                        type: "category",
                        name: "x",
                        splitLine: {show: false},
                        data: data.时间,
                        axisLabel: {
                            how: true,
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        type: "value",
                        name: "y",
                        axisLabel: {
                            how: true,
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    }
                ],

                series: [
                    {
                        name: "信息广播",
                        type: "line",
                        label: {
                            normal: {
                                show: true,
                                position: 'top'
                            }
                        },
                        data: data.信息广播
                    },
                    {
                        name: "信息提醒",
                        type: "line",
                        label: {
                            normal: {
                                show: true,
                                position: 'top'
                            }
                        },
                        data: data.信息提醒

                    },
                    {
                        name: "应请求信息服务",
                        type: "line",
                        label: {
                            normal: {
                                show: true,
                                position: 'top'
                            }
                        },
                        data: data.应请求信息服务

                    }

                ]
            };
            bottom_zhe.setOption(option);
        });
    }else if(number==2){
        $.getJSON("./json/bottom_zhe2.json",function(data){
            option = {
                color: [
                    '#c0504d','#4f81bd','#92d3b5'
                ],
                tooltip: {
                    trigger: "item",
                    formatter: "{a} <br/>{b} : {c}"
                },
                legend: {
                    x: "10px",
                    y: "30px",
                    data: ["主动助航", "应船舶请求","航道交通组织"],
                    textStyle: {
                        color: 'auto',
                    }
                },
                grid: { // 控制图的大小，调整下面这些值就可以，
                    x: 50,
                    x2: 50,
                    y2: 70,// y2可以控制 X轴跟Zoom控件之间的间隔，避免以为倾斜后造成 label重叠到zoom上
                },
                xAxis: [
                    {
                        type: "category",
                        name: "x",
                        splitLine: {show: false},
                        data: data.时间,
                        axisLabel: {
                            how: true,
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        type: "value",
                        name: "y",
                        axisLabel: {
                            how: true,
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    }
                ],

                series: [
                    {
                        name: "主动助航",
                        type: "line",
                        label: {
                            normal: {
                                show: true,
                                position: 'top'
                            }
                        },
                        data: data.主动助航
                    },
                    {
                        name: "应船舶请求",
                        type: "line",
                        label: {
                            normal: {
                                show: true,
                                position: 'top'
                            }
                        },
                        data: data.应船舶请求

                    },
                    {
                        name: "航道交通组织",
                        type: "line",
                        label: {
                            normal: {
                                show: true,
                                position: 'top'
                            }
                        },
                        data: data.航道交通组织

                    }

                ]
            };
            bottom_zhe.setOption(option);
        });
    }else if(number==3){
        $.getJSON("./json/bottom_zhe3.json",function(data){
            option = {
                color: [
                    '#c0504d','#4f81bd','#92d3b5'
                ],
                tooltip: {
                    trigger: "item",
                    formatter: "{a} <br/>{b} : {c}"
                },
                legend: {
                    x: "10px",
                    y: "30px",
                    data: ["锚地组织", "交通管制"],
                    textStyle: {
                        color: 'auto',
                    }
                },
                grid: { // 控制图的大小，调整下面这些值就可以，
                    x: 50,
                    x2: 50,
                    y2: 70,// y2可以控制 X轴跟Zoom控件之间的间隔，避免以为倾斜后造成 label重叠到zoom上
                },
                xAxis: [
                    {
                        type: "category",
                        name: "x",
                        splitLine: {show: false},
                        data: data.时间,
                        axisLabel: {
                            how: true,
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        type: "value",
                        name: "y",
                        axisLabel: {
                            how: true,
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    }
                ],

                series: [
                    {
                        name: "锚地组织",
                        type: "line",
                        label: {
                            normal: {
                                show: true,
                                position: 'top'
                            }
                        },
                        data: data.锚地组织
                    },
                    {
                        name: "交通管制",
                        type: "line",
                        label: {
                            normal: {
                                show: true,
                                position: 'top'
                            }
                        },
                        data: data.交通管制

                    }

                ]
            };
            bottom_zhe.setOption(option);
        });
    }else if(number==4){
        $.getJSON("./json/bottom_zhe4.json",function(data){
            option = {
                color: [
                    '#c0504d','#4f81bd','#92d3b5','#B5C334'
                ],
                tooltip: {
                    trigger: "item",
                    formatter: "{a} <br/>{b} : {c}"
                },
                legend: {
                    x: "10px",
                    y: "30px",
                    data: ["交通紧急处置", "水上联合执法","求助","其他"],
                    textStyle: {
                        color: 'auto',
                    }
                },
                grid: { // 控制图的大小，调整下面这些值就可以，
                    x: 50,
                    x2: 50,
                    y2: 70,// y2可以控制 X轴跟Zoom控件之间的间隔，避免以为倾斜后造成 label重叠到zoom上
                },
                xAxis: [
                    {
                        type: "category",
                        name: "x",
                        splitLine: {show: false},
                        data: data.时间,
                        axisLabel: {
                            how: true,
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        type: "value",
                        name: "y",
                        axisLabel: {
                            how: true,
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    }
                ],

                series: [
                    {
                        name: "交通紧急处置",
                        type: "line",
                        label: {
                            normal: {
                                show: true,
                                position: 'top'
                            }
                        },
                        data: data.交通紧急处置
                    },
                    {
                        name: "水上联合执法",
                        type: "line",
                        label: {
                            normal: {
                                show: true,
                                position: 'top'
                            }
                        },
                        data: data.水上联合执法

                    },
                    {
                        name: "求助",
                        type: "line",
                        label: {
                            normal: {
                                show: true,
                                position: 'top'
                            }
                        },
                        data: data.求助

                    },
                    {
                        name: "其他",
                        type: "line",
                        label: {
                            normal: {
                                show: true,
                                position: 'top'
                            }
                        },
                        data: data.其他

                    }

                ]
            };
            bottom_zhe.setOption(option);
        });
    }else if(number==5){
        $.getJSON("./json/bottom_zhe5.json",function(data){
            option = {
                color: [
                    '#c0504d','#4f81bd','#92d3b5'
                ],
                tooltip: {
                    trigger: "item",
                    formatter: "{a} <br/>{b} : {c}"
                },
                legend: {
                    x: "10px",
                    y: "30px",
                    data: ["接受船舶报告", "重点船舶监控","避免险情","船舶交通事故", "纠正处置违法","跟踪船只"],
                    textStyle: {
                        color: 'auto',
                    }
                },
                grid: { // 控制图的大小，调整下面这些值就可以，
                    x: 50,
                    x2: 50,
                    y2: 70,// y2可以控制 X轴跟Zoom控件之间的间隔，避免以为倾斜后造成 label重叠到zoom上
                },
                xAxis: [
                    {
                        type: "category",
                        name: "x",
                        splitLine: {show: false},
                        data: data.时间,
                        axisLabel: {
                            how: true,
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        type: "value",
                        name: "y",
                        axisLabel: {
                            how: true,
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    }
                ],

                series: [
                    {
                        name: "接受船舶报告",
                        type: "line",
                        label: {
                            normal: {
                                show: true,
                                position: 'top'
                            }
                        },
                        data: data.接受船舶报告
                    },
                    {
                        name: "重点船舶监控",
                        type: "line",
                        label: {
                            normal: {
                                show: true,
                                position: 'top'
                            }
                        },
                        data: data.重点船舶监控

                    },
                    {
                        name: "避免险情",
                        type: "line",
                        label: {
                            normal: {
                                show: true,
                                position: 'top'
                            }
                        },
                        data: data.避免险情

                    },
                    {
                        name: "船舶交通事故",
                        type: "line",
                        label: {
                            normal: {
                                show: true,
                                position: 'top'
                            }
                        },
                        data: data.船舶交通事故
                    },
                    {
                        name: "纠正处置违法",
                        type: "line",
                        label: {
                            normal: {
                                show: true,
                                position: 'top'
                            }
                        },
                        data: data.纠正处置违法

                    },
                    {
                        name: "跟踪船只",
                        type: "line",
                        label: {
                            normal: {
                                show: true,
                                position: 'top'
                            }
                        },
                        data: data.跟踪船只

                    }
                ]
            };
            bottom_zhe.setOption(option);
        });
    }else if(number==6){
        $.getJSON("./json/bottom_zhe6.json",function(data){
            option = {
                color: [
                    '#c0504d','#4f81bd','#92d3b5'
                ],
                tooltip: {
                    trigger: "item",
                    formatter: "{a} <br/>{b} : {c}"
                },
                legend: {
                    x: "10px",
                    y: "30px",
                    data: ["协调船艇丶飞机丶车辆", "提供证据","协查","协助扣滞", "航标协管","其他"],
                    textStyle: {
                        color: 'auto',
                    }
                },
                grid: { // 控制图的大小，调整下面这些值就可以，
                    x: 50,
                    x2: 50,
                    y2: 70,// y2可以控制 X轴跟Zoom控件之间的间隔，避免以为倾斜后造成 label重叠到zoom上
                },
                xAxis: [
                    {
                        type: "category",
                        name: "x",
                        splitLine: {show: false},
                        data: data.时间,
                        axisLabel: {
                            how: true,
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        type: "value",
                        name: "y",
                        axisLabel: {
                            how: true,
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    }
                ],

                series: [
                    {
                        name: "协调船艇丶飞机丶车辆",
                        type: "line",
                        label: {
                            normal: {
                                show: true,
                                position: 'top'
                            }
                        },
                        data: data.协调船艇丶飞机丶车辆
                    },
                    {
                        name: "提供证据",
                        type: "line",
                        label: {
                            normal: {
                                show: true,
                                position: 'top'
                            }
                        },
                        data: data.提供证据

                    },
                    {
                        name: "协查",
                        type: "line",
                        label: {
                            normal: {
                                show: true,
                                position: 'top'
                            }
                        },
                        data: data.协查

                    },
                    {
                        name: "协助扣滞",
                        type: "line",
                        label: {
                            normal: {
                                show: true,
                                position: 'top'
                            }
                        },
                        data: data.协助扣滞
                    },
                    {
                        name: "航标协管",
                        type: "line",
                        label: {
                            normal: {
                                show: true,
                                position: 'top'
                            }
                        },
                        data: data.航标协管

                    },
                    {
                        name: "其他",
                        type: "line",
                        label: {
                            normal: {
                                show: true,
                                position: 'top'
                            }
                        },
                        data: data.其他

                    }

                ]
            };
            bottom_zhe.setOption(option);
        });
    }
}
top_left();
top_bing();
bottom_zhu();
Show();
function s() {
    var or=[];
    for(var i=0;i<=6;i++){
        or.push(''+Math.ceil(Math.random()*700)+'');
    }
    return or;
}
function Show() {
    $(".col2 .mod1 .md4").css("left","320px");
    $(".zhiban").css("display","inline");
    $("#leidatu").css("display","inline");
    $("#bingtu").css("display","none")
}
function Hide() {
    $(".col2 .mod1 .md4").css("left","550px");
    $(".zhiban").css("display","none");
    $("#leidatu").css("display","none");
    $("#bingtu").css("display","inline")
}
function shouye() {
    Show();
    top_left();
    top_bing();
    bottom_zhu();
}
function xinxifuwu() {
    top_left_bing(1);
    Orbing(1);
    bottom_zhe(1);
    Hide();
}
function zhuhangfuwu() {
    top_left_bing(2);
    Orbing(2);
    bottom_zhe(2);
    Hide();
}
function jiaotongzuz() {
    top_left_bing(3);
    Orbing(3);
    bottom_zhe(3);
    Hide();
}
function zhichilianhexingdong() {
    top_left_bing(4);
    Orbing(4);
    bottom_zhe(4);
    Hide();
}
function yingjichuzhideng() {
    top_left_bing(5);
    Orbing(5);
    bottom_zhe(5);
    Hide();
}
function zongheguanli() {
    top_left_bing(6);
    Orbing(6);
    bottom_zhe(6);
    Hide();
}