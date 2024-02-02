import screen from "../images/screen.png"
import battery from "../images/battery.png"
import cpu from "../images/cpu.png"
import speaker from "../images/speaker.png"
import qn from "../images/qn.png"



const QnData = [
    { image: screen, Question: "Question About Screen Replacment ", Answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed ullamcorper orci. Aenean consequat dui.    " },
    { image: battery, Question: "Question About Battery Replacment", Answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt justo nisi, ut ornare diam auctor et. Etiam at dapibus felis, nec elementum eros. Ut.    " },
    { image: cpu, Question: "Question About CPU Fixing", Answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt justo nisi, ut ornare diam auctor et. Etiam at dapibus felis    " },
    { image: speaker, Question: "Question About Speaker Repare", Answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed ullamcorper orci. Aenean consequat dui.    " },
    { image: qn, Question: "Question About Reparing", Answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt justo nisi, ut ornare diam auctor et. Etiam at dapibus felis, nec elementum eros. Ut.    " },
]

const FQnData = [
    { IDHash: "#ONE", ID: "ONE", Question: "Question ONE", Strong: "Lorem ipsum dolor sit amet, Aliquam sed ullamcorper orci. Aenean consequat dui.    ", Answer: "lorem" },
    { IDHash: "#TWO", ID: "TWO", Question: "Question Two ", Strong: "Lorem ipsum dolor sit amet, Aliquam sed ullamcorper orci. Aenean consequat dui.    ", Answer: "lorem" },
    { IDHash: "#THREE", ID: "THREE", Question: "Question Three ", Strong: "Lorem ipsum dolor sit amet, Aliquam sed ullamcorper orci. Aenean consequat dui.    ", Answer: "lorem" },
    { IDHash: "#FOUR", ID: "FOUR", Question: "Question Four ", Strong: "Lorem ipsum dolor sit amet, Aliquam sed ullamcorper orci. Aenean consequat dui.    ", Answer: "lorem" },
    { IDHash: "#FIVE", ID: "FIVE", Question: "Question Five ", Strong: "Lorem ipsum dolor sit amet, Aliquam sed ullamcorper orci. Aenean consequat dui.    ", Answer: "lorem" },

]
const repairdata = [
    { Fixing: "Replacing glass", Price: "$99,99" },
    { Fixing: "Replacing screen    ", Price: "$199,99" },
    { Fixing: "Changing battery    ", Price: "$9,99" },
    { Fixing: "Repair device    ", Price: "$78,99" },
    { Fixing: "Upgrade device    ", Price: "$178,99" },
    { Fixing: "Cleaning    ", Price: "$97,99" },
]



 



export { QnData, FQnData  ,repairdata};