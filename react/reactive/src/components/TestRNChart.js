// only mobile component
import React from "react"

import { View, Text, Platform, Dimensions } from 'react-native'

import {
  BarChart
} from "react-native-chart-kit";

const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43]
    }
  ]
};

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.3,
  color: (opacity = 1) => `rgba(255, 50, 0, ${opacity})`,
  barPercentage: 0.5,
};

const TestRNChart = () => {
  if (Platform.OS !== 'web') console.log('Only works on mobile')

  const screenWidth = Dimensions.get("window").width;


  return (
    <View>
      <Text>Bezier Line Chart</Text>
      <BarChart
        data={data}
        width={screenWidth}
        height={220}
        yAxisLabel="$"
        chartConfig={chartConfig}
        verticalLabelRotation={30}
      />
    </View>
  )
}

export default TestRNChart