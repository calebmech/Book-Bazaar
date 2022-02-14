import { Icon, IconProps } from "@chakra-ui/react";
import React from "react";

const Logo: React.FC<IconProps> = ({ ...props }) => {
  return (
    <Icon viewBox="0 75 2316 1608" width="1.125em" color="accent" {...props}>
      <path
        d="M841.09 88.398C490.109 137.248 200.534 177.79 197.59 178.491C163.267 186.661 127.397 214.573 105.037 250.509C79.5441 291.483 67.1521 352.611 70.6851 419.966C75.7691 516.903 98.9841 585.895 141.579 630.656C147.056 636.411 149.478 639.617 148.591 639.936C147.846 640.205 124.736 647.19 97.2361 655.458C69.7361 663.726 46.6141 670.839 45.8541 671.263C45.0931 671.688 42.7511 674.88 40.6491 678.357C34.1721 689.07 34.2411 697.501 40.8871 707.454C48.1901 718.391 66.0111 729.315 92.9811 739.388C108.664 745.245 114.818 749.121 126.075 760.23C150.676 784.509 164.633 824.247 168.831 881.966C170.852 909.743 167.831 975.815 164.393 979.057C163.757 979.657 156.486 982.071 148.236 984.423C126.36 990.657 79.4901 1006.28 62.7361 1012.92C24.2301 1028.19 2.16311 1042.34 0.153109 1053.06C-0.717891 1057.7 2.16811 1062.3 7.76911 1065.18C10.2281 1066.45 23.4891 1070.19 37.2381 1073.5C50.9871 1076.81 62.9571 1079.74 63.8381 1080.01C65.0511 1080.39 63.8711 1082.13 58.9841 1087.19C27.5421 1119.73 9.02611 1163.44 2.09011 1221.47C-0.0388908 1239.28 -0.306891 1284.89 1.59011 1306.47C9.70311 1398.73 34.0871 1462.96 76.3801 1503.47C92.3421 1518.76 110.72 1529.75 128.254 1534.51C132.644 1535.7 323.701 1597.58 552.825 1672.03L969.414 1807.38L1601.22 1654.37C1948.71 1570.22 2234.42 1500.66 2236.13 1499.8C2243.18 1496.24 2246.14 1491.74 2245.04 1486.22C2244.14 1481.68 2234.17 1472.11 2224.17 1466.19C2201.27 1452.63 2155.81 1435.44 2096.78 1418.02C2088.28 1415.51 2081.02 1413.12 2080.66 1412.71C2079.75 1411.7 2078.05 1397.21 2076.64 1378.47C2075.13 1358.26 2076.02 1310.11 2078.2 1294.47C2082.33 1264.9 2087.98 1244.72 2097.7 1224.85C2110.35 1199 2127.7 1181.91 2148.74 1174.58C2171.65 1166.6 2191.38 1155.83 2200.03 1146.59C2211.22 1134.62 2212.32 1123.24 2203.54 1110.29C2199.83 1104.81 2201.02 1105.3 2164.74 1094.45C2155.11 1091.57 2146.89 1088.91 2146.47 1088.53C2146.05 1088.15 2148.96 1085.62 2152.93 1082.9C2167.47 1072.97 2183.83 1055.52 2195.99 1036.97C2203.85 1024.98 2215.51 1001.01 2221.27 984.966C2230.57 959.086 2238.73 921.158 2242.15 887.855C2252.14 790.683 2237.75 718.132 2198.48 667.613C2195.76 664.12 2193.92 660.908 2194.39 660.478C2194.86 660.047 2219.76 653.769 2249.74 646.526C2307.23 632.634 2311.2 631.329 2314.32 625.306C2319.11 616.049 2308.52 605.289 2281.24 591.674C2258.17 580.163 2214.46 564.328 2170.24 551.461C2160.34 548.581 2151.74 545.616 2151.15 544.873C2148.95 542.156 2145.76 501.615 2145.75 476.466C2145.74 427.834 2152.82 388.995 2167.2 358.826C2173.55 345.511 2178.69 337.725 2187.03 328.807C2196.99 318.158 2206.76 311.405 2217.74 307.579C2231.23 302.876 2247.41 295.499 2256.1 290.086C2267.17 283.185 2273.18 277.33 2276.84 269.898C2279.63 264.245 2279.95 262.752 2279.49 257.651C2278.97 251.972 2275.88 244.574 2271.95 239.625C2270.38 237.654 2208.05 218.586 1877.16 118.853C1661.05 53.716 1483.11 0.233018 1481.74 0.00101838C1480.36 -0.231982 1192.07 39.547 841.09 88.398ZM527.236 369.407C692.786 423.387 878.186 483.821 939.236 503.703C1000.29 523.586 1050.41 539.973 1050.61 540.118C1051.21 540.538 1042.77 807.356 1041.96 813.52L1041.24 819.073L749.736 737.316C276.931 604.709 229.352 591.434 226.912 591.45C222.056 591.483 208.968 586.137 201.113 580.912C170.738 560.706 151.795 516.862 144.538 449.966C142.497 431.155 142.815 376.065 145.051 360.966C151.771 315.59 165.462 289.265 188.69 277.059C198.083 272.123 206.018 270.406 217.236 270.88C226.047 271.253 232.545 273.318 527.236 369.407ZM2127.43 338.131C2103.96 385.018 2095.77 457.537 2104.91 537.466C2106.07 547.641 2107.07 558.186 2107.13 560.9L2107.24 565.835L2097.24 568.286C2091.74 569.634 1862.26 626.688 1587.29 695.071C1312.32 763.455 1087.14 819.202 1086.89 818.954C1086.22 818.281 1095.09 544.519 1095.82 543.333C1096.16 542.773 1131.5 535.123 1174.34 526.332C1217.18 517.541 1433.59 473.055 1655.24 427.474C1876.89 381.893 2074.44 341.276 2094.24 337.214C2114.04 333.152 2130.37 330.159 2130.54 330.563C2130.71 330.967 2129.31 334.372 2127.43 338.131ZM2112.21 705.977C2143.79 712.667 2162.31 740.67 2170.36 793.921C2171.26 799.863 2172.11 814.791 2172.44 830.466C2174.08 909.122 2158.99 969.208 2129.32 1002.17C2119.04 1013.59 2103.91 1022.47 2090.68 1024.84C2086.59 1025.57 2046.11 1036.61 2000.74 1049.37C1955.36 1062.12 1773.34 1113.16 1596.24 1162.78L1274.24 1253L1273.48 1243.48C1272.62 1232.62 1264.4 974.424 1264.91 974.037C1265.44 973.629 2088.04 705.617 2090.24 705.136C2094.67 704.165 2105.64 704.585 2112.21 705.977ZM234.736 773.87C260.311 779.09 438.961 815.814 631.736 855.479C824.511 895.143 1035.74 938.58 1101.13 952.005C1166.52 965.429 1220.1 976.537 1220.2 976.69C1220.61 977.284 1228.99 1252.55 1228.61 1252.93C1228.26 1253.27 1037.86 1206.03 370.053 1039.88C261.346 1012.83 206.999 998.893 207.257 998.123C207.469 997.486 208.338 991.341 209.187 984.466C215.13 936.355 215.817 892.796 211.219 855.654C207.322 824.173 199.661 796.112 188.604 772.816C184.189 763.515 184.101 763.141 186.486 763.856C187.449 764.144 209.161 768.651 234.736 773.87ZM568.236 1273.41C794.836 1347.3 980.346 1407.84 980.481 1407.94C980.937 1408.28 971.717 1685.82 971.233 1686.3C970.968 1686.57 787.486 1635.45 563.494 1572.71C339.502 1509.97 154.18 1458.36 151.668 1458.02C141.775 1456.68 126.368 1447.23 116.233 1436.29C90.1611 1408.15 75.4091 1359.26 72.8341 1292.47C69.7021 1211.23 85.4701 1161.09 119.509 1144.05C127.685 1139.96 135.024 1138.52 146.236 1138.81L156.236 1139.06L568.236 1273.41ZM2060.74 1197.84C2060.74 1198.04 2058.51 1202.88 2055.78 1208.59C2032.11 1258.15 2025.14 1330.72 2035.82 1416.32C2036.94 1425.31 2037.69 1432.85 2037.47 1433.06C2036.56 1433.98 1017.18 1687.11 1016.61 1686.57C1015.93 1685.91 1024.53 1411.34 1025.26 1410.61C1025.5 1410.37 1074.65 1400.06 1134.47 1387.7L1243.24 1365.24L1258.24 1368.88C1266.49 1370.87 1274.27 1372.5 1275.52 1372.49C1276.78 1372.48 1304.91 1363.69 1338.02 1352.97L1398.24 1333.46L1699.74 1271.52C1865.56 1237.45 2014.06 1206.9 2029.74 1203.64C2059.16 1197.51 2060.74 1197.21 2060.74 1197.84Z"
        fill="currentColor"
      />
      <path
        d="M527.236 369.407C692.786 423.387 878.186 483.821 939.236 503.703C1000.29 523.586 1050.41 539.973 1050.61 540.118C1051.21 540.538 1042.77 807.356 1041.96 813.52L1041.24 819.073L749.736 737.316C276.931 604.709 229.352 591.434 226.912 591.45C222.056 591.483 208.968 586.137 201.113 580.912C170.738 560.706 151.795 516.862 144.538 449.966C142.497 431.155 142.815 376.065 145.051 360.966C151.771 315.59 165.462 289.265 188.69 277.059C198.083 272.123 206.018 270.406 217.236 270.88C226.047 271.253 232.545 273.318 527.236 369.407ZM2127.43 338.131C2103.96 385.018 2095.77 457.537 2104.91 537.466C2106.07 547.641 2107.07 558.186 2107.13 560.9L2107.24 565.835L2097.24 568.286C2091.74 569.634 1862.26 626.688 1587.29 695.071C1312.32 763.455 1087.14 819.202 1086.89 818.954C1086.22 818.281 1095.09 544.519 1095.82 543.333C1096.16 542.773 1131.5 535.123 1174.34 526.332C1217.18 517.541 1433.59 473.055 1655.24 427.474C1876.89 381.893 2074.44 341.276 2094.24 337.214C2114.04 333.152 2130.37 330.159 2130.54 330.563C2130.71 330.967 2129.31 334.372 2127.43 338.131ZM2112.21 705.977C2143.79 712.667 2162.31 740.67 2170.36 793.921C2171.26 799.863 2172.11 814.791 2172.44 830.466C2174.08 909.122 2158.99 969.208 2129.32 1002.17C2119.04 1013.59 2103.91 1022.47 2090.68 1024.84C2086.59 1025.57 2046.11 1036.61 2000.74 1049.37C1955.36 1062.12 1773.34 1113.16 1596.24 1162.78L1274.24 1253L1273.48 1243.48C1272.62 1232.62 1264.4 974.424 1264.91 974.037C1265.44 973.629 2088.04 705.617 2090.24 705.136C2094.67 704.165 2105.64 704.585 2112.21 705.977ZM234.736 773.87C260.311 779.09 438.961 815.814 631.736 855.479C824.511 895.143 1035.74 938.58 1101.13 952.005C1166.52 965.429 1220.1 976.537 1220.2 976.69C1220.61 977.284 1228.99 1252.55 1228.61 1252.93C1228.26 1253.27 1037.86 1206.03 370.053 1039.88C261.346 1012.83 206.999 998.893 207.257 998.123C207.469 997.486 208.338 991.341 209.187 984.466C215.13 936.355 215.817 892.796 211.219 855.654C207.322 824.173 199.661 796.112 188.604 772.816C184.189 763.515 184.101 763.141 186.486 763.856C187.449 764.144 209.161 768.651 234.736 773.87ZM568.236 1273.41C794.836 1347.3 980.346 1407.84 980.481 1407.94C980.937 1408.28 971.717 1685.82 971.233 1686.3C970.968 1686.57 787.486 1635.45 563.494 1572.71C339.502 1509.97 154.18 1458.36 151.668 1458.02C141.775 1456.68 126.368 1447.23 116.233 1436.29C90.1611 1408.15 75.4091 1359.26 72.8341 1292.47C69.7021 1211.23 85.4701 1161.09 119.509 1144.05C127.685 1139.96 135.024 1138.52 146.236 1138.81L156.236 1139.06L568.236 1273.41ZM2060.74 1197.84C2060.74 1198.04 2058.51 1202.88 2055.78 1208.59C2032.11 1258.15 2025.14 1330.72 2035.82 1416.32C2036.94 1425.31 2037.69 1432.85 2037.47 1433.06C2036.56 1433.98 1017.18 1687.11 1016.61 1686.57C1015.93 1685.91 1024.53 1411.34 1025.26 1410.61C1025.5 1410.37 1074.65 1400.06 1134.47 1387.7L1243.24 1365.24L1258.24 1368.88C1266.49 1370.87 1274.27 1372.5 1275.52 1372.49C1276.78 1372.48 1304.91 1363.69 1338.02 1352.97L1398.24 1333.46L1699.74 1271.52C1865.56 1237.45 2014.06 1206.9 2029.74 1203.64C2059.16 1197.51 2060.74 1197.21 2060.74 1197.84Z"
        fill="none"
      />
    </Icon>
  );
};
export default Logo;
