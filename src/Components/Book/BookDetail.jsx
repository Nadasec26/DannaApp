import React from 'react'
import img from '../../images/bookdet.png'
import img2 from '../../images/visa.png'
import icon1 from '../../images/Payment method icon.png'
import icon2 from '../../images/Payment method icon (1).png'
import icon3 from '../../images/Payment method icon (2).png'
import { Link } from 'react-router-dom'

export default function Book() { 
    return (
        <div className='BookDetail'>
            <div className="container">
                <div className="row gy-4">
                    <div className="col-lg-6" style={{ backgroundColor: 'rgba(217, 217, 217, 0.31)'}}>
                        <img src={img} className='w-100' alt="" />
                        <div className="d-flex gap-3 mt-1 p-2">
                            <p className='text-muted'>Dental,baby</p>
                            <div className="d-flex">
                                <div>
                                    <i className="bi bi-star-fill" style={{ color: 'rgba(255, 199, 0, 1)' }}></i>
                                    <i className="bi bi-star-fill" style={{ color: 'rgba(255, 199, 0, 1)' }}></i>
                                    <i className="bi bi-star-fill" style={{ color: 'rgba(255, 199, 0, 1)' }}></i>
                                    <i className="bi bi-star-fill" style={{ color: 'rgba(255, 199, 0, 1)' }}></i>
                                </div>
                                <p className='fw-bold'>6.4</p>
                            </div>
                        </div>
                        <div className="d-flex gap-3">
                            <div className="d-flex gap-2">
                                <i className="bi bi-geo-alt-fill" style={{ color: 'rgba(25, 118, 210, 1)' }}></i>
                                <p className='text-muted'>Medimentor can helo</p>
                            </div>
                            <div className="d-flex gap-2">
                                <i className="bi bi-clock" style={{ color: 'rgba(25, 118, 210, 1)' }}></i>
                                <p className='text-muted'>Dental,baby</p>
                            </div>
                        </div>
                        <h4 className='mt-4' style={{ color: 'rgba(50, 170, 144, 1)'}}>Details about your Nursery</h4>
                        <div>
                            <div className="d-flex mt-5 border-bottom justify-content-between">
                                <div className="d-flex gap-2">
                                    <i className="bi bi-geo-alt-fill" style={{ color: 'rgba(25, 118, 210, 1)' }}></i>
                                    <p className='text-muted'>Location Of Hospital</p>
                                </div>
                                <p style={{ color: 'rgba(50, 170, 144, 1)' }}>2400 6th St NW, <br /> Washington, DC 20059</p>
                            </div>
                            <div className="d-flex mt-4 border-bottom justify-content-between">
                                <p className='text-muted'>Name Of Hospital</p>
                                <p className='text-muted fs-5'>ANH Hospital</p>
                            </div>
                            <div className="d-flex mt-4 border-bottom justify-content-between">
                                <p className='text-muted'>Code Of Incabation</p>
                                <p className='text-muted fs-5'>12345rd</p>
                            </div>
                            <div className="d-flex mt-4 border-bottom justify-content-between">
                                <p className='text-muted'>1 Day</p>
                                <p className='text-muted fs-5'>$ 80.00</p>
                            </div>
                            <div className="d-flex mt-4 justify-content-between">
                                <p className='text-muted fw-bold'>Price</p>
                                <p className='text-muted fs-5 fw-bold'>$ 80.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="text-center">
                            <img src={img2} className='w-75' alt="" />
                        </div>
                        <div className='p-5'>
                            <label for="" className="form-label" style={{ color: 'rgba(52, 64, 84, 1)' }}>Select Name Of Child</label>
                            <select className="form-select form-select-md mb-3" aria-label=".form-select-lg example">
                                <option selected>Max</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            {/* <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder='Name Chaild'/>
                            </div> */}
                            <label for="" className="form-label" style={{ color: 'rgba(52, 64, 84, 1)' }}>Reason Of Reservation</label>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder='Jaundice'/>
                            </div>
                            <label for="" className="form-label" style={{ color: 'rgba(52, 64, 84, 1)' }}>Phone Number</label>
                            <div className="input-group mb-3">
                                <input type="tel" className="form-control" placeholder='+1 (555) 000-0000' />
                            </div>
                            <div className="card p-4 mt-5 border-0 shadow-sm rounded-4" style={{ backgroundColor: 'rgba(238, 238, 236, 0.44)'}}>
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex gap-2">
                                        <i className="bi bi-check-circle-fill" style={{ color: 'rgba(2, 2, 70, 1)' }}></i>
                                        <p style={{ color: 'rgba(52, 64, 84, 1)' }}>Pay with Credit Card</p>
                                    </div>
                                    <div className='d-flex gap-2'>
                                        <img src={icon1} style={{width:'35%'}} alt="" />
                                        <img src={icon2} style={{ width: '35%' }} alt="" />
                                        <img src={icon3} style={{ width: '35%' }} alt="" />
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className='col-md-8'>
                                        <label for="" className="form-label" style={{ color: 'rgba(52, 64, 84, 1)' }}>Name on card</label>
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder='Olivia Rhye' />
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <label for="" className="form-label" style={{ color: 'rgba(52, 64, 84, 1)' }}>Expiry</label>
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder='06/ 2024' />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className='col-md-8'>
                                        <label for="" className="form-label" style={{ color: 'rgba(52, 64, 84, 1)' }}>Card number</label>
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder='1234 1234 1234 1234' />
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <label for="" className="form-label text-muted">Cash</label>
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder='$ 30.12'/>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex gap-2">
                                <input className="form-check-input" type="checkbox" value="" aria-label="Checkbox for following text input" />
                                    <p className='fw-bold' style={{ color: 'rgba(2, 2, 70, 1)' }}>Please check to ACK our <Link className='text-decoration-underline' style={{ color: 'rgba(2, 2, 70, 1)' }}>Privacy & Terms Policy</Link></p>
                                </div>
                                <button className='btn text-white shadow-sm' style={{ backgroundColor: 'rgba(50, 170, 144, 1)' }} >Buy $30.12</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}