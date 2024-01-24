import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteCleaner } from '../api/cleanerData';

export default function CleanerCard({ cleanerObj, onUpdate }) {
  const deleteThisCleaner = () => {
    if (window.confirm(`Remove ${cleanerObj.name}?`)) {
      deleteCleaner(cleanerObj.firebaseKey).then(() => onUpdate());
    }
  };
  console.warn(cleanerObj, 'cleanerObj');

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={cleanerObj?.image} alt={cleanerObj?.name} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{cleanerObj?.name}</Card.Title>
        <p className="card-text bold">{cleanerObj?.role}</p>
        <Link href={`/cleaner/edit/${cleanerObj.firebaseKey}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisCleaner} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

CleanerCard.propTypes = {
  cleanerObj: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    role: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
