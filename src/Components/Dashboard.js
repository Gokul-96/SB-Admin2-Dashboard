import React from 'react'
import Card from './Card'
function Dashboard() {
    let data = [{
        title:"Earnings (Monthly)",
        value:"$5000",
        color:"danger",
        icon:"fa-calendar",
        isProgress:false
    },
    {
        title:"Earnings (Annual)",
        value:"$60000",
        color:"success",
        icon:"fa-dollar-sign",
        isProgress:false
    },
    {
        title:"Task",
        value:"40",
        color:"warning",
        icon:"fa-clipboard-list",
        isProgress:true
    },
    {
        title:"Pending Request",
        value:"18",
        color:"dark",
        icon:"fa-comments",
        isProgress:false
    }
]
  return <>
  {/* Content Wrapper */}
  <div id="content-wrapper" className="d-flex flex-column">
<div id="content">
    {/* Page Content */}
    <div className="container-fluid">

        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            <a href="javascript(void)" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
        </div>

        <div className="row">
            {
                //  map() function iterates over each element (e) in the data array and returns a new array.
                //i = index
                //e = current element
                //key and input is props
                data.map((e,i)=>{
                    return <Card key={i}
                    input={e}
                    />
                })
            }
        </div>

    </div>

</div>
</div>
  </>
}

export default Dashboard