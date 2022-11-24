import { CartItem } from "./CartItem.js"
import storeItems from "./data/database.json"
import { useShoppingCart } from "./context/ShoppingCartContext"
import SendOrder from "./SendOrder.js"
import { Formik } from "formik"

export default function Checkout() {
    const { closeCart, cart } = useShoppingCart()
    return (
        <div>
            <div className="flex justify-center">
                <div>
                    <div className="grid columns-1 mt-5">
                        {cart.map((item) => (
                            <CartItem key={item.sku} {...item} />
                        ))}
                    </div>
                    <div className="text-2xl font-bold text-right">
                        Total{" "}
                        {cart.reduce((total, cartItem) => {
                            const item = storeItems.products.find(
                                (item) => item.sku === cartItem.sku
                            )
                            return total + (item?.price || 0) * cartItem.quantity
                        }, 0)}
                        dkk
                    </div>
                </div>
            </div>
            <div className="grid justify-center mt-10 columns-1">
                <Formik
                    initialValues={{
                        email: "",
                        fullname: "",
                        phone: "",
                        address: "",
                        city: "",
                        country: "",
                        zip: "",
                        note: "",
                        readTOS: false,
                    }}
                    validate={(values) => {
                        const errors = {}
                        if (!values.email) {
                            errors.email = "Required"
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
                        ) {
                            errors.email = "Invalid email address"
                        }
                        if (!values.fullname) {
                            errors.fullname = "Required"
                        }
                        if (!values.phone) {
                            errors.phone = "Required"
                        }
                        if (!values.address) {
                            errors.address = "Required"
                        }
                        if (!values.city) {
                            errors.city = "Required"
                        }
                        if (!values.country) {
                            errors.country = "Required"
                        }
                        if (!values.zip) {
                            errors.zip = "Required"
                        }
                        if (!values.readTOS) {
                            errors.readTOS = "Required"
                        }
                        return errors
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            SendOrder(values)
                            setSubmitting(false)
                        }, 400)
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                placeholder="E-Mail"
                                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            />{" "}
                            {errors.email && touched.email && errors.email}
                            <input
                                type="text"
                                name="fullname"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.fullname}
                                placeholder="Full Name"
                                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            />
                            {errors.fullname && touched.fullname && errors.fullname}
                            <input
                                type="text"
                                name="phone"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.phone}
                                placeholder="Phone Number"
                                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            />
                            {errors.phone && touched.phone && errors.phone}
                            <input
                                type="text"
                                name="address"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.address}
                                placeholder="Address"
                                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            />
                            {errors.address && touched.address && errors.address}
                            <input
                                type="text"
                                name="city"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.city}
                                placeholder="City"
                                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            />
                            {errors.city && touched.city && errors.city}
                            <input
                                type="text"
                                name="country"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.country}
                                placeholder="Country"
                                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            />
                            {errors.country && touched.country && errors.country}
                            <input
                                type="text"
                                name="zip"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.zip}
                                placeholder="Zip Code"
                                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            />
                            {errors.zip && touched.zip && errors.zip}
                            <input
                                type="text"
                                name="note"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.note}
                                placeholder="Note"
                                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            />
                            {errors.note && touched.note && errors.note}
                            <input
                                type="checkbox"
                                name="readTOS"
                                id="readTOS"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.readTOS}
                            />
                            <label for="readTOS">
                                I have read and accepted the terms and conditions
                            </label>
                            <br />
                            {errors.readTOS && touched.readTOS && errors.readTOS}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="text-white rounded shadow p-3 bg-blue-500 mt-10"
                            >
                                Submit
                            </button>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}
