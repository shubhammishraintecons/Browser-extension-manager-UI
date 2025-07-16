import React, { useState } from 'react';
import FilterBar from '../Filterbar.jsx/FilterBar';
import ExtensionCard from '../ExtensionCard/ExtensionCard';
import extensionsData from '../../../extensions';
import { Col, Container, Row } from 'react-bootstrap';

const ExtensionList = () => {
  const [filter, setFilter] = useState("all");

  // ✅ Correct: useState defined BEFORE filtering
  const [extensions2, setExtensions2] = useState(extensionsData);

  const handleToggle = (index) => {
    const updated = [...extensions2];
    updated[index].isActive = !updated[index].isActive;
    setExtensions2(updated);
  };

  const filteredExtensions = extensions2.filter((ext) => {
    if (filter === 'all') return true;
    if (filter === 'active') return ext.isActive;
    if (filter === 'inactive') return !ext.isActive;
  });

  return (
    <>
      <FilterBar selectedFilter={filter} onFilterChange={setFilter} />
      <div className="card-grid">
        <Container className="mt-4">
          <Row>
            {filteredExtensions.map((ext, index) => (
              <Col key={index} xs={12} sm={6} md={4} className="mb-4">
                <ExtensionCard
                  logo={ext.logo}
                  name={ext.name}
                  description={ext.description}
                  isActive={ext.isActive}
                  onToggle={() => handleToggle(index)}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ExtensionList;
