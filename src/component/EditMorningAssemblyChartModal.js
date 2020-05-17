// ────────────────────────────────────────────────────────── import 📥 ───┐
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { v4 } from 'uuid';
import $ from "jquery"

import { updateSalesTargetsAsync, updateShouldRenderAddMorningAssemblyItemModal } from '../redux-store/thunk'
// ────────────────────────────────────────────────────────────────────────┘

// ─────────────────────────────────────────────────────────── setup 🏗 ───┐
const EditMorningAssemblyChartModal = (props) => {
  let { salesTargets, dispatch } = props


  console.log("EditMorningAssemblyChartModal")

  // let salesTargetTitles = salesTargets.map(target => target.title)
  // let salesTargetDataLabels = salesTargets.map(target => target.dataLabel)
  // let salesTargetDataArrays = salesTargets.map(target => target.dataArray)
  // let salesTargetTargetLabels = salesTargets.map(target => target.targetLabel)
  // let salesTargetTargetNumbers = salesTargets.map(target => target.targetNumber)
  // let salesTargetBorderColors = salesTargets.map(target => target.borderColor)

  const [titles, setTitles] = useState([...salesTargets.map(target => (!!target.title ? target.title : '' ))])
  const [dataLabels, setDataLabels] = useState([...salesTargets.map(target => (!!target.dataLabel ? target.dataLabel : ''))])
  const [dataLocalArrays, setDataLocalArrays] = useState([...salesTargets.map(target => (!!target.dataArray ? [...target.dataArray] : []))])
  const [targetLabels, setTargetLabels] = useState(salesTargets.map(target => (!!target.targetLabel ? target.targetLabel : '')))
  const [targetNumbers, setTargetNumbers] = useState(salesTargets.map(target => (!!target.targetNumber ? target.targetNumber : '')))
  const [borderColors, setBorderColors] = useState(salesTargets.map(target => (!!target.borderColor ? target.borderColor : '')))


  let clearUserInputs = () => {
    props.dispatch(updateShouldRenderAddMorningAssemblyItemModal(false))
  }

  const onTitleChange = (e) => {
    let elementId = e.target.id  // tSect0
    let index = parseInt(elementId.slice(-1, elementId.length))

    let newTitles = [...titles]
    newTitles[index] = e.target.value

    setTitles(newTitles)
  }

  const onDataLabelChange = (e) => {
    let elementId = e.target.id  // dlSect0
    let index = parseInt(elementId.slice(-1, elementId.length))

    let newDataLabels = [...dataLabels]
    newDataLabels[index] = e.target.value

    setDataLabels(newDataLabels)
  }

  const onDataArrayChange = (e) => {
    let elementClass = [...e.target.classList].find(name => name.includes("dataArraySect")) //dataArraySect0
    let elementId = e.target.id  //id: daM00

    let sectionIndex = parseInt(elementClass.slice(-1, elementClass.length))
    let monthIndex = parseInt(elementId.slice(-2, elementId.length))

    let newLocalDataArrays = [...dataLocalArrays]
    newLocalDataArrays[sectionIndex][monthIndex] = e.target.value == "" ?  "" : parseInt(e.target.value)

    setDataLocalArrays(newLocalDataArrays)
  }

  const onTargetLabelChange = (e) => {
    let elementId = e.target.id  // tlSect0
    let index = parseInt(elementId.slice(-1, elementId.length))

    let newTargetLabels = [...targetLabels]
    newTargetLabels[index] = e.target.value

    setTargetLabels(newTargetLabels)
  }

  const onTargetNumberChange = (e) => {
    let elementId = e.target.id  // tnSect0
    let index = parseInt(elementId.slice(-1, elementId.length))

    let newTargetNumbers = [...targetNumbers]
    newTargetNumbers[index] = e.target.value


    setTargetNumbers(newTargetNumbers)
  }

  const onBorderColorChange = (e) => {
    let elementClass = [...e.target.classList].find(name => name.includes("bcSect")) //bcSect0
    let index = parseInt(elementClass.slice(-1, elementClass.length))

    let newBorderColors = [...borderColors]

    switch (e.target.id) {
      case "bc-red":
        newBorderColors[index] = "#f24959"
        break
      case "bc-blue":
        newBorderColors[index] = "#248eff"
        break
      case "bc-green":
        newBorderColors[index] = "#57CC32"
        break
      case "bc-yellow":
        newBorderColors[index] = "#FAA916"
        break
      case "bc-black":
        newBorderColors[index] = "#212529"
        break
      default:
        newBorderColors[index] = "#212529"
    } 

    setBorderColors(newBorderColors)
  }


  let onSavebuttonClick = (e) => {
    const newSalesTargets = salesTargets.map((n, index) => {
      return {
        title: titles[index],
        dataLabel: dataLabels[index],
        dataArray: dataLocalArrays[index].filter(data => data),
        targetLabel: targetLabels[index],
        targetNumber: targetNumbers[index],
        borderColor: borderColors[index]
      }
    })

    props.dispatch(
      updateSalesTargetsAsync(newSalesTargets)
    )

    $("#editMorningAssemblyChartModal").modal('hide')
  }

  // clear all user inputs when the form has been dismissed
  $('#editMorningAssemblyChartModal').on('hidden.bs.modal', clearUserInputs)


  let InputForms = salesTargets.map((salesTarget, index) => {
    let months1 = [1, 2, 3, 4, 5, 6]
    let months2 = [7, 8, 9, 10, 11, 12]
    return (
      <form className="shadow-sm rounded p-2 m-2 my-3 bg-white" key={JSON.stringify(salesTarget)}>
        <div className="form-group">
          <input type="text" className="form-control my-1 border" id={"tSect" + index} placeholder="営業　新規顧客２００（例）" value={titles[index]} onChange={onTitleChange} />

          <div className="form-row">
            <div className="col-8">
              <input type="text" className="form-control my-1 border" id={"dlSect" + index} placeholder="新規顧客数（例）" value={dataLabels[index]} onChange={onDataLabelChange} />
            </div>
            <div className="col">
              <div className="btn-group btn-group-toggle m-1" data-toggle="buttons" >
                <label type="button" className={"btn btn-outline-danger btn-colorless " + (borderColors[index] === "#f24959" ? "active" : "")}>
                  <input type="radio" name="options" className={"bcSect" + index} id="bc-red" autoComplete="off" onClick={onBorderColorChange}/>赤
                </label>
                <label type="button" className={"btn btn-outline-primary btn-colorless " + (borderColors[index] === "#248eff" ? "active" : "")}>
                  <input type="radio" name="options" className={"bcSect" + index} id="bc-blue" autoComplete="off" onClick={onBorderColorChange} />青
                </label>
                <label type="button" className={"btn btn-outline-success btn-colorless " + (borderColors[index] === "#57CC32" ? "active" : "")}>
                  <input type="radio" name="options" className={"bcSect" + index} id="bc-green" autoComplete="off" onClick={onBorderColorChange} />緑
                </label>
                <label type="button" className={"btn btn-outline-warning btn-colorless " + (borderColors[index] === "#FAA916" ? "active" : "")}>
                  <input type="radio" name="options" className={"bcSect" + index} id="bc-yellow" autoComplete="off" onClick={onBorderColorChange} />黄
                </label>
                <label type="button" className={"btn btn-outline-dark btn-colorless " + (borderColors[index] === "#212529" ? "active" : "")}>
                  <input type="radio" name="options" className={"bcSect" + index} id="bc-black" autoComplete="off"  onClick={onBorderColorChange}/>黒
                </label>
              </div>
            </div>
          </div>

          <div className="form-row">
            {months1.map((month, subIndex) =>
              <div className="col" key={month + "a"}>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">{month}月</div>
                  </div>
                  <input type="number" className={"form-control border " + ("dataArraySect" + index)} id={"daM" + (month >= 11 ? month - 1 : `0${month - 1}`)} value={dataLocalArrays[index][subIndex]} onChange={onDataArrayChange} />
                </div>
              </div>
            )}
          </div>

          <div className="form-row">
            {months2.map((month, subIndex2) =>
              <div className="col" key={month + "b"}>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">{month}月</div>
                  </div>
                  <input type="number" className={"form-control border " + ("dataArraySect" + index)} id={"daM" + (month >= 11 ? month - 1 : `0${month - 1}`)} value={dataLocalArrays[index][subIndex2 + 6]} onChange={onDataArrayChange} />
                </div>
              </div>
            )}
          </div>

          <div className="form-row">
            <div className="col-8">
              <input type="text" className="form-control my-2 border" id={"tlSect" + index} placeholder="顧客数目標（例）" value={targetLabels[index]} onChange={onTargetLabelChange} />
            </div>
            <div className="col">
              <div className="input-group my-2">
                <div className=" input-group-prepend">
                  <div className="input-group-text">目標数</div>
                </div>
                <input type="number" className="form-control border" id={"tnSect" + index} value={targetNumbers[index]} onChange={onTargetNumberChange} />
              </div>
            </div>
          </div>
        </div>
      </form>
    )
  })

  let modalForm = (
    <div className="modal fade" id="editMorningAssemblyChartModal" tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header bg-success text-white">
            <h5 className="modal-title">{"チャートの編集"}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body bg-light">
            {InputForms}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal" >キャンセル</button>
            <button type="button" className="btn btn-primary" onClick={onSavebuttonClick}>保存する</button>
          </div>
        </div>
      </div>
    </div>
  )

  return modalForm
}

// ────────────────────────────────────────────────────────────────────────┘

// ────────────────────────────────────────────────────────── export 📤 ───┐
export default connect(state => state)(EditMorningAssemblyChartModal)
// ────────────────────────────────────────────────────────────────────────┘