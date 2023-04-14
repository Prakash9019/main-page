import React from 'react'

const labtests = () => {
  return (
    <nav>
   
    <div className="labtests">
        <div className="row">
        <Link className="labtest-list" to='/labtestcategories.html#bt1'>Blood Tests</Link>
        <Link className="labtest-list" to='/labtestcategories.html#bt2'>Kidney tests</Link>
        </div>
        <div className="row">
        <Link className="labtest-list" to='/labtestcategories.html#bt3'>Thyroid function test</Link>
        <Link className="labtest-list" to='/labtestcategories.html#bt4'>Urinanalysis</Link>
        </div>
    </div>
    
</nav>
  )
}

export default labtests