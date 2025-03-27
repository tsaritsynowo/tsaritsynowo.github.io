import "../../CSS/project.css"

function SelectCard() {
  return (
    <div className="SelectCard">
      <h3>项目1</h3>
      <p>项目描述</p>
    </div>
  )
}

function SelectCardList() {
  return (
    <>
    <SelectCard />
    <SelectCard />
    <SelectCard />
    <SelectCard />
    <SelectCard />
    <SelectCard />
    <SelectCard />
    <SelectCard />
    <SelectCard />
    <SelectCard />
    <SelectCard />
    <SelectCard />
    <SelectCard />
    <SelectCard />
    </>
  )
}

function Iframe() {
  return (
    <div>
    <p>效果框：</p>
    <iframe>

    </iframe>
    </div>
  )
}

export default function Project() {
  return (
  <div className="container2">
    <div className="SelectContainer">
        <SelectCardList />
    </div>

    <div className="iframe">
        <Iframe />
    </div>
  </div>
)
}