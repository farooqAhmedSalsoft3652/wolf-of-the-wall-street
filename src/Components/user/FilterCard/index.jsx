import React from 'react'
import SiteButton from '../../Button/button'
import './index.css'
import { SiteSelect } from '../../Input/select'
import SiteInput from '../../Input/input'

export const FilterCard = (props) => {
  const {
    makeFilter = false,
    transmissionFilter = false,
    yearFilter = false,
    kmFilter = false,
    priceFilter = false,
  } = props

  const makeEntries = [
    {
      id: 1,
      value: "SelectMake",
      option: "Select"
    },
  ]

  const transmissionEntries = [
    {
      id: 1,
      value: "SelectMake",
      option: "Select"
    },
  ]
  return (
    <div className="filter-card">
      <div className="filter-card-header">
        <h3 className="mb-0">Filter</h3>
      </div>
      <div className="filter-card-inner">
        {makeFilter && (
          <div>
            <SiteSelect label="Make" className="grey-input" labelClass="ms-0" items={makeEntries} />
          </div>
        )}
        {transmissionFilter && (
          <div className="mt-3">
            <SiteSelect label="Transmission" className="grey-input" labelClass="ms-0" items={transmissionEntries} />
          </div>
        )}
        {yearFilter && (
          <div className="mt-3">
            <label htmlFor="" className="site-label ms-0">Year</label>
            <div className="d-flex align-items-center gap-2">
              <SiteInput type="number" placeholder="Enter Year" className="text-center grey-input" />
              <span className="grey-text mb-0">-</span>
              <SiteInput type="number" placeholder="Enter Year" className="text-center grey-input" />
            </div>
          </div>
        )}
        {kmFilter && (
          <div className="mt-3">
            <label htmlFor="" className="site-label ms-0">Km Driven</label>
            <div className="d-flex align-items-center gap-2">
              <SiteInput type="number" placeholder="Enter KM" className="text-center grey-input" />
              <span className="grey-text mb-0">-</span>
              <SiteInput type="number" placeholder="Enter KM" className="text-center grey-input" />
            </div>
          </div>
        )}
        {priceFilter && (
          <div className="mt-3">
            <label htmlFor="" className="site-label ms-0">Price</label>
            <div className="d-flex align-items-center gap-2">
              <SiteInput type="number" placeholder="Enter Price" className="text-center grey-input" />
              <span className="grey-text mb-0">-</span>
              <SiteInput type="number" placeholder="Enter Price" className="text-center grey-input" />
            </div>
          </div>
        )}
        <div className="d-flex align-items-center gap-2 mt-4 pb-2">
          <SiteButton className="border-btn px-0 mnw-0 w-50">Apply</SiteButton>
          <SiteButton className=" w-50 px-0 mnw-0">Clear</SiteButton>
        </div>
      </div>
    </div>
  )
}
