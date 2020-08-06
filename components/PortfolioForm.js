import { useState } from 'react'
import { useForm } from 'react-hook-form'
import DatePicker from "react-datepicker";


const PortfolioForm = ({ onSubmit }) => {


    const { register, handleSubmit } = useForm();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        ref={register}
                        name="title"
                        type="text"
                        className="form-control"
                        id="title" />
                </div>

                <div className="form-group">
                    <label htmlFor="city">Company</label>
                    <input
                        ref={register}
                        name="company"
                        type="text"
                        className="form-control"
                        id="company" />
                </div>

                <div className="form-group">
                    <label htmlFor="city">Company Website</label>
                    <input
                        ref={register}
                        name="companyWebsite"
                        type="text"
                        className="form-control"
                        id="companyWebsite" />
                </div>

                <div className="form-group">
                    <label htmlFor="street">Location</label>
                    <input
                        ref={register}
                        name="location"
                        type="text"
                        className="form-control"
                        id="location" />
                </div>

                <div className="form-group">
                    <label htmlFor="street">Job Title</label>
                    <input
                        ref={register}
                        name="jobTitle"
                        type="text"
                        className="form-control"
                        id="jobTitle" />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                        name="description"
                        rows="5"
                        type="text"
                        className="form-control"
                        id="description">
                    </textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="startDate">Start Date</label>
                    <div>
                        <DatePicker
                            selected={startDate}
                            onChange={date => setStartDate(date)}
                            dateFormat="MM/yyyy"
                            showMonthYearPicker
                            showFullMonthYearPicker
                            showTwoColumnMonthYearPicker
                            showYearDropdown
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="endDate">End Date</label>
                    <div>
                        <DatePicker
                            selected={endDate}
                            onChange={date => setEndDate(date)}
                            dateFormat="MM/yyyy"
                            showMonthYearPicker
                            showFullMonthYearPicker
                            showTwoColumnMonthYearPicker
                            showYearDropdown
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="btn btn-primary">Create
                </button>
            </form>
        </div>
    )
}

export default PortfolioForm

