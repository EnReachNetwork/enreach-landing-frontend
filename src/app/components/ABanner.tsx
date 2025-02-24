
'use client'
import { useEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { SocialButtons } from "./social-buttons";
import * as am5geodata_continentsLow from "@amcharts/amcharts5-geodata/continentsLow";
import CountUp from "react-countup";

const ABanner = () => {

  const initMap = async () => {
    am5.addLicense("AM5M-7163-0147-1745-7749");
    const root = am5.Root.new("chartdiv");
    root.setThemes([am5themes_Animated.new(root)]);
    const chart = root.container.children.push(
      am5map.MapChart.new(root, {
        projection: am5map.geoOrthographic(),
        panX: "rotateX",
        panY: "rotateY",
        wheelX: "none",
        wheelY: "none",
      })
    );

    chart.set("zoomLevel", 1);

    const polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_continentsLow.default,
      })
    );

    const graticuleSeries = chart.series.unshift(
      am5map.GraticuleSeries.new(root, { step: 20 })
    );

    graticuleSeries.mapLines.template.setAll({
      stroke: am5.color('#FFFFFF'),
      strokeOpacity: 0.1
    });


    polygonSeries.mapPolygons.template.setAll({
      tooltipText: "{name}",
      fill: am5.color('#2E2E2E'),
      stroke: am5.color('#2E2E2E'),
      strokeWidth: 1.5,
    });

    polygonSeries.mapPolygons.template.states.create("hover", {
      fill: am5.color('#4281ff'),

    });

    chart.animate({
      key: "rotationX",
      to: 360,
      duration: 30000,
      loops: Infinity,
    });
  }

  useEffect(() => {
    initMap()
  }, [])

  const countList = [
    {
      start: 0,
      end: 1000000,
      name: 'Unlimited Edge Scalability',
      Suffix: '+'
    },
    {
      start: 100,
      end: 1,
      name: 'Stuttering Rate',
      Prefix: '< ',
      Suffix: ' %'
    },
    {
      start: 0,
      end: 60,
      name: 'Save on Traffic',
      Prefix: '> ',
      Suffix: ' %'
    },
    {
      start: 100,
      end: 20,
      name: 'Response Time',
      Prefix: '< ',
      Suffix: ' ms'
    }
  ]


  return < div className=" overflow-hidden mo:w-full  " >
    <div className="w-container m-auto items-center flex lg:pl-[105px] md:w-full md:pl-0  mb-[-120px] mo:w-full   ">
      <div className="   flex items-center  w-full h-[83vh] mo:h-[65vh]  relative">
        <div className="  md:w-full overflow-hidden mo:w-full mo:text-center mo:mb-[100px]  py-5">
          <div className=' text-[70px] mo:text-2xl md:text-[55px] text-nowrap   font-semibold md:px-[30px] text-[#FFFFFF] md:lead-[71px]  leading-[91px] relative z-[9999]'><div>AI, Within Reach.</div> </div>
          {/* <div className='lg:hidden text-2xl      font-medium   text-[#FFFFFF] leading-normal relative z-[1000]'><div>The Genesis of Open Edge, </div> for the AI Era.</div> */}

          <div className="text-[32px]  mo:text-xs md:text-[28px] lg:text-nowrap  py-3 mo:px-[77px]  leading-[38px] font-semibold md:px-[30px] font-AlbertSans text-[#7C7C7C] relative z-[9999]">
            The Edge Cloud for everyone to contribute, earn,
            <div>and own a share in the AI era.</div>
          </div>
          <div className=" pt-5 flex mo:mt-[50px]  items-center gap-10 mo:gap-[15px] md:px-[30px] mo:flex-col-reverse relative z-[9999]">
            <a href={'https://docs.enreach.network'} target="_blank" className="bg-[#4281FF]   text-[#FFFFFF] ml-[6px] w-[229px] mo:w-[178px] items-center text-2xl mo:text-base mo:font-medium font-semibold leading-9  flex justify-center h-[50px] mo:h-[38px] btn rounded-3xl ipsText font-AlbertSans p-3">Learn More</a>
            <SocialButtons />
          </div>
        </div>
      </div>
      <div className=" w-full  mo:absolute mo:flex mo:justify-center">
        <div id="chartdiv" className=" relative right-80  mo:left-0 mo:w-[500px] mo:h-[500px] mo:pb-0  pb-20  bottom-[70px] "></div>
      </div>
    </div>

    <div
      className="  text-[#FFFFFF] bg-[#0C0C0C] w-full relative mt-[10px] ">
      <div className="w-container mo:w-full m-auto py-[30px]  md:w-full  mo:px-[30px] ">

        <div className="mx-[80px] mo:gap-8 md:mx-[30px]  flex mo:flex-col justify-between">
          {countList.map((item, index) => {
            return <div key={`countList_${index}`} className="flex flex-col items-center">
              <span className="text-[55px] mo:text-xl md:text-[50px] font-semibold leading-[72px]">
                {item.Prefix}<CountUp startOnMount={true} start={item.start} end={item.end} duration={3} />{item.Suffix}
              </span>
              <span className="text-xl mo:text-xs font-medium leading-6 font-AlbertSans">{item.name}</span>
            </div>

          })}



        </div>
      </div>
    </div>


  </div >

}


export default ABanner