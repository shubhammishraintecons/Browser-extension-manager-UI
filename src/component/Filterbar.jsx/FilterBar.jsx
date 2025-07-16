import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';

const FilterBar = ({selectedFilter,onFilterChange}) => {
  return (
    <div className='Filter-bar'>
      <Container>
        <Row>
          <Col md={12}>
            <div className="heading-btns">
              <div className="heading-filter-bar">
                <h2>Extensions List</h2>
              </div>
              <div className="btn-types">
                <button className={`btn-types ${selectedFilter === 'all' ? 'active' : ''}`} onClick={()=> onFilterChange('all')}>All</button>
                <Button className={`btn-types ${selectedFilter === 'active' ? 'active' : ''}`} onClick={()=> onFilterChange('active')}>Active</Button>
                <Button className={`btn-types ${selectedFilter === 'inactive' ? 'active' : ''}`} onClick={()=> onFilterChange('inactive')}>Inactive</Button>
              </div>
            </div>

          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FilterBar