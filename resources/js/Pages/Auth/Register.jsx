import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        firstName: "",
        lastName: "",
        name: "",
        country: "",
        email: "",
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div className="flex min-h-screen items-center justify-center py-6">
                    <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 py-12">
                        {/* Left Section */}
                        <div className="p-8 py-12 md:p-12">
                            <Link href="/">
                                <img

                                    src={`${window.location.origin}/assets/Dashboard/Clip path group.png`}
                                    alt="Logo"
                                    className="w-10 h-10"
                                />
                            </Link>
                            <h2 className="text-2xl font-bold text-gray-800">
                                Create an account
                            </h2>

                            {/* First and Last Name */}
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="block text-sm font-medium text-gray-600">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={data.firstName}
                                        placeholder="e.g. Howard"
                                        onChange={(e) => setData("firstName", e.target.value)}
                                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        name="lastname"
                                        value={data.lastname}
                                        placeholder="e.g. Thurman"
                                        onChange={(e) => setData("lastname", e.target.value)}
                                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>

                            {/* Country */}
                            <div className="mt-4">
                                <label className="block text-sm font-medium text-gray-600">
                                    Country
                                </label>
                                <select
                                    name="country"
                                    value={data.country}
                                    onChange={(e) => setData("country", e.target.value)}
                                    className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600"
                                >
                                    <option value="">Select your country</option>
                                    <option>United States</option>
                                    <option>Canada</option>
                                    <option>Mexico</option>
                                </select>
                            </div>

                            {/* Email */}
                            <div className="mt-4">
                                <InputLabel htmlFor="email" value="Email" />
                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full"
                                    autoComplete="username"
                                    onChange={(e) => setData("email", e.target.value)}
                                    required
                                />
                                <InputError message={errors.email} className="mt-2" />
                            </div>

                            {/* Password */}
                            <div className="mt-4">
                                <InputLabel htmlFor="password" value="Password" />
                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="mt-1 block w-full"
                                    autoComplete="new-password"
                                    onChange={(e) => setData("password", e.target.value)}
                                    required
                                />
                                <InputError message={errors.password} className="mt-2" />
                            </div>

                            {/* Confirm Password */}
                            <div className="mt-4">
                                <InputLabel htmlFor="password_confirmation" value="Confirm Password" />
                                <TextInput
                                    id="password_confirmation"
                                    type="password"
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    className="mt-1 block w-full"
                                    autoComplete="new-password"
                                    onChange={(e) => setData("password_confirmation", e.target.value)}
                                    required
                                />
                                <InputError message={errors.password_confirmation} className="mt-2" />
                            </div>

                            {/* Submit Button */}
                            <div className="mt-6 flex justify-between items-center">
                                <PrimaryButton disabled={processing}>Register</PrimaryButton>
                                <Link href={route("login")} className="text-sm text-gray-600 hover:text-gray-900">
                                    Already registered?
                                </Link>
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="hidden md:flex flex-col items-center justify-center bg-blue-500 rounded-r-lg text-white p-12">
                            <Link href="/">
                                <img
                                    src={`${window.location.origin}/assets/Dashboard/Clip path group.png`}
                                    alt="Right Section Logo"
                                    className="mb-6 w-16 h-16"
                                />
                            </Link>
                            <h3 className="text-xl font-bold">Welcome to Cashcloudy</h3>
                            <p className="mt-2 text-center">
                                Join us today and experience our seamless services. Already have an account? Just sign in and get started!
                            </p>
                        </div>
                    </div>
                </div>
            </form>
        </GuestLayout>
    );
}
