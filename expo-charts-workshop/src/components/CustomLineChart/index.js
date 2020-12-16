import React from 'react';

import { ActivityIndicator, View, Text } from 'react-native';

import { LineChart, YAxis, XAxis } from 'react-native-svg-charts';

function CustomLineChart({ chartData, chartDimensions }) {
    const contentInsetYAxis = { top: 10, bottom: 10 };
    const contentInsetXAxis = { left: 40, right: 10, bottom: 10, flexDirection: 'row' };
    
    return (
        chartDimensions ? (
            <>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderRadius: 8, }}>
                    <YAxis 
                        data={chartData}
                        contentInset={contentInsetYAxis}
                        svg={{
                            fill: '#9094AD',
                            fontSize: 12,
                        }}
                        numberOfTicks={3}
                        formatLabel={(value) => `$${value}`}

                    />
                    
                    <LineChart
                        data={chartData}
                        svg={{
                            strokeWidth: 4,
                            stroke: 'rgba(179, 220, 139, 0.7)',
                        }}
                        style={{
                            marginLeft: 10,
                            marginRight: 20,
                            width: chartDimensions.width - 30,
                            height: chartDimensions.height - 20,
                        }}
                    />
                </View>
                
                <XAxis 
                    data={chartData}
                    contentInset={contentInsetXAxis}
                    formatLabel={(value, index) => index + 1}
                    svg={{
                        fill: '#9094AD',
                        fontSize: 12,
                    }}
                    style={{
                        marginTop: 10,
                    }}

                />
            </>
        ) : (
            <ActivityIndicator
                size="small"
                color="#2b2b73"
            />
        )
    );
}

export default CustomLineChart;