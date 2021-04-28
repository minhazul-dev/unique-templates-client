import React from 'react';

const ManageServices = ({ pd }) => {

  const deleteProduct = id => {
    const url = `https://protected-peak-79922.herokuapp.com/deleteProduct/${id}`;
    fetch((url), {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(response => {
        if (response) {
          alert('Product Deleted successfully')
        }
        // console.log('deleted successfully', results);
      })
    // console.log('btn clicked', id);

  }
  return (
    <section>

      <div className="container mt-5 col-md-3 mt-5">
        <div className="card m-4" style={{ width: '18rem' }}>

          <img src={pd.image} className="card-img-top" alt="failed to load image" />

          <div className="card-body">
            <h5 className="card-title">{pd.name}</h5>
            <p className="card-text"> Price: {pd.price}</p>
            <button onClick={() => deleteProduct(pd._id)} type="button" class="btn btn-warning">Delete</button>
          </div>
        </div>


      </div>
    </section>
  );
};

export default ManageServices;