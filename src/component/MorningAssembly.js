// ────────────────────────────────────────────────────────── import 📥 ───┐
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import $ from "jquery"
import Chart from 'react-chartjs2'
import moment from 'moment'

import { updateShouldRenderAddMorningAssemblyItemModal } from '../redux-store/thunk'


// ────────────────────────────────────────────────────────────────────────┘

// ────────────────────────────────────────────────────────── Navbar 🧱 ───┐
const MorningAssemblyNavbar = (props) => {
  let navItems = [{
    title: "Favorites",
    icon: "fas fa-star fa-lg d-block mx-auto",
    path: "/"
  }, {
    title: "Experiments",
    icon: "fas fa-flask fa-lg d-block mx-auto",
    path: "/experiments"
  }, {
    title: "Tasks",
    icon: "fas fa-tasks fa-lg d-block mx-auto",
    path: "/tasks"
  }]

  let NavItems = navItems.map(nav => (
    <div key={JSON.stringify(nav)}>
      <NavLink className="lacoms-navitem" activeClassName="active" to={nav.path} exact={true}>
        <i className={nav.icon}></i>
        <span className="title">{nav.title}</span>
      </NavLink>
    </div>
  ))

  let navbar = (
    <nav className="morningAssembly-navbar sticky-top">
      <div className="container">
        <a className="navbar-brand" href="/">
          <span className="">
            <span>LACOMS 朝礼ガイドブック</span>
            <sup className="badge lacoms-version ml-2">2.1.0</sup>
          </span>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            {NavItems}
          </div>
        </div>
      </div>
    </nav>
  )

  return navbar
}
// ────────────────────────────────────────────────────────────────────────┘

// ─────────────────────────────────────────────────────────── Title 🧱 ───┐
const MorningAssemblyTitle = (props) => {
  let [showRemoveButton, setShowRemoveButton] = useState(false)

  let onAddButtonClick = () => {
    $("#addMorningAssemblyItemModal").modal('show')
  }

  let onRemoveButtonClick = () => {
    $("#removeMorningAssemblyItemModal").modal('show')
  }

  let onMouseOver = () => {
    setShowRemoveButton(true)
  }

  let onMouseLeave = () => {
    setShowRemoveButton(false)
  }


  let morningAssemblyTitle = (
    <div className="d-flex justify-content-between align-items-end">
      <div>
        <h2 className="text-muted mt-5">おはようございます。本日の朝礼を始めましょう。</h2>
      </div>
      {
        <div onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
          <CSSTransition in={showRemoveButton} unmountOnExit timeout={200} classNames="fade" >
            <button className="btn btn-lg" id="removeButton" onClick={onRemoveButtonClick}>
              <i className="fas fa-minus text-secondary"></i>
            </button>
          </CSSTransition>
          <button className="btn btn-lg" id="addButton" onClick={onAddButtonClick}>
            <i className="fas fa-plus text-secondary" />
          </button>
        </div>
      }
    </div>
  )

  return morningAssemblyTitle
}
// ────────────────────────────────────────────────────────────────────────┘

// ─────────────────────────────────────────────────────── List Group 🧱 ───┐
const MorningAseemblyListGroup = (props) => {
  let { morningAssemblyItems } = props

  let AssemblyLists = morningAssemblyItems.map((item, index) => {
    if (item.url) {
      return (
        <a href={item.url} className="list-group-item transparent-list list-group-item-action  " key={item.id}>
          <div className="d-flex w-100 justify-content-between pl-1">
            <h4 className="mt-1">{`${index + 1}. ${item.title}`}</h4>
            <small className="url-tag">URL</small>
          </div>
          <p className="mb-1 text-muted">{item.subTitle}</p>
          <small>　</small>
        </a>
      )
    } else {
      return (
        <li className="list-group-item transparent-list" key={item.id}>
          <div className="d-flex w-100 justify-content-between pl-1">
            <h4 className="mt-1">{`${index + 1}. ${item.title}`}</h4>
            <small></small>
          </div>
          <p className="mb-1 text-muted">{item.subTitle}</p>
          <small>　</small>
        </li>
      )
    }
  })

  let morningAseemblyListGroup = (
    <div className="MorningAseemblyListGroup">
      <div className="list-group">
        {AssemblyLists}
      </div>
    </div>
  )

  return morningAseemblyListGroup
}
// ────────────────────────────────────────────────────────────────────────┘

// ──────────────────────────────────────────────────────────────────── carousel 🧱 ───┐
const MorningAseemblyCarousel = (props) => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide my-5 " data-ride="carousel" data-interval="false">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active bg-success text-center text-white">
          <div className="d-flex justify-content-center align-items-center p-5" style={{ minHeight: "150px" }}>
            <h2>１. 私たちは、お客様の資産となるサービスを提供します。</h2>
          </div>
        </div>
        <div className="carousel-item  bg-success text-center text-white">
          <div className="d-flex justify-content-center align-items-center p-5" style={{ minHeight: "150px" }}>
            <h2>２. 私たちは、お客様の人生に関わる者として責任を負います。</h2>
          </div>
        </div>
        <div className="carousel-item  bg-success text-center text-white">
          <div className="d-flex justify-content-center align-items-center p-5" style={{ minHeight: "150px" }}>
            <h2>３. 私たちは、絶えず目標を設定し、成長し続けます。</h2>
          </div>
        </div>
        <div className="carousel-item  bg-success text-center text-white">
          <div className="d-flex justify-content-center align-items-center p-5" style={{ minHeight: "150px" }}>
            <h2>最高の英語教育サービスを提供する為に頑張っていきましょう！</h2>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  )
}
// ────────────────────────────────────────────────────────────────────────┘

// ─────────────────────────────────────────────────────────── chart 🧱 ───┐
const MorningAseemblyChart = (props) => {
  let { salesTargets } = props

  let datasets = salesTargets.filter(target => target.dataLabel !== '').map(target => {
    return [{
      label: target.dataLabel,
      data: target.dataArray,
      borderColor: target.borderColor,
      fill: false,
      lineTension: 0
    }, {
      label: target.targetLabel,
      data: Array(12).fill(target.targetNumber),
      fill: false,
      radius: 0
    }]
  }).flat()


  let data = {
    type: 'bar',
    labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    datasets,
  }

  return (
    <div className="morningAseemblyChart my-4">
      <div className="d-flex justify-content-between">
        <div>
          <h3 className=" text-success pt-3 pl-1">{moment().year() + "年の目標"}</h3>
          <p className=" text-muted pl-1">{salesTargets.map(target => target.title + "　　")}</p>
        </div>
        <div className="mt-3">
          <button className="btn btn-primary" onClick={() => {
            props.dispatch(updateShouldRenderAddMorningAssemblyItemModal(true))
            setTimeout(() => {
              $("#editMorningAssemblyChartModal").modal('show')
            }, 100)

          }}>編集する</button>
        </div>
      </div>

      <Chart type="line" data={data} height="100" />

    </div>
  )
}

// ────────────────────────────────────────────────────────────────────────┘

// ────────────────────────────────────────────────────────── pie Chart ───┐
const MorningAseemblyPieChart = (props) => {
  let { salesTargets } = props

  let targetNumbers = salesTargets.filter(target => target.dataLabel !== '').map(target => target.targetNumber)
  let latestNumbers = salesTargets.filter(target => target.dataLabel !== '').map(target => (target.dataArray[target.dataArray.length - 1]))

  let dataLabels = salesTargets.filter(target => target.dataLabel !== '').map(target => target.dataLabel)
  let borderColors = salesTargets.filter(target => target.dataLabel !== '').map(target => target.borderColor)


  let datasetss = targetNumbers.map((n, index) => {
    return [{
      data: [latestNumbers[index], targetNumbers[index] - latestNumbers[index]],
      backgroundColor: [borderColors[index], "#F0F0F0"]
    }]
  })

  let datas = datasetss.map((datasets, index) => {
    return {
      type: 'pie',
      labels: [dataLabels[index], '目標達成残数'],
      datasets
    }
  })

  // let sampleData = {
  //   type: 'pie',
  //   labels: [dataLabels[0], '目標達成残数'],
  //   datasets: [{
  //     data: [latestNumbers[0], targetNumbers[0] - latestNumbers[0]],
  //     backgroundColor: [borderColors[0], "#F0F0F0"]
  //   }]
  // }



  let Charts = datas.map((data, index) => {
    console.log(data)
    return (
      <div className="col pie-chart mt-3" key={JSON.stringify(data)}>
        <Chart type="pie" data={data} height="200" />
        <h5 className="text-center text-muted mt-2">達成率：{Math.round(latestNumbers[index] / targetNumbers[index] * 100)}%</h5>
      </div >
    )
  })




  return (
  //   <div className="" key={JSON.stringify(sampleData)}>
  //   <Chart type="pie" data={sampleData} height="100" />
  //   <p className="text-center">達成率：{Math.round(12 / 46 * 100)}%</p>
  // </div >

    <div className="row">
      {Charts}
    </div>
  )
}
// ────────────────────────────────────────────────────────────────────────┘



// ─────────────────────────────────────────────────────── Container 🧱 ───┐
const MorningAseembly = (props) => {
  let morningAseembly = (
    <div className="MorningAseemblyContainer">
      <MorningAssemblyNavbar />
      <div className="container">
        <MorningAssemblyTitle />
        <hr /><br />
        <MorningAseemblyListGroup morningAssemblyItems={props.morningAssemblyItems} />
        <MorningAseemblyCarousel />
        <MorningAseemblyChart salesTargets={props.salesTargets} dispatch={props.dispatch}/>
        <MorningAseemblyPieChart salesTargets={props.salesTargets} />
      </div>
    </div>
  )

  return morningAseembly
}
// ────────────────────────────────────────────────────────────────────────┘




// ────────────────────────────────────────────────────────── export 📤 ───┐
export default connect(state => state)(MorningAseembly)
// ────────────────────────────────────────────────────────────────────────┘