import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <div className="flex min-h-screen items-center justify-center">
                <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2">
                    {/* Left Section */}
                    <div className="p-8 md:p-12">
                        <h2 className="text-2xl font-bold text-gray-800">
                            Login to your account
                        </h2>
                        <form onSubmit={submit} className="space-y-6">
                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-600"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                                <InputError
                                    message={errors.email}
                                    className="mt-1"
                                />
                            </div>

                            {/* Password */}
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-600"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    value={data.password}
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                                <InputError
                                    message={errors.password}
                                    className="mt-1"
                                />
                            </div>

                            <div className="flex items-center justify-between mt-4">
                                {canResetPassword && (
                                    <Link
                                        href={route("password.request")}
                                        className="text-sm text-gray-600 hover:text-gray-900 underline"
                                    >
                                        Forgot your password?
                                    </Link>
                                )}

                                <PrimaryButton
                                    type="submit"
                                    className="ms-4"
                                    disabled={processing}
                                >
                                    Log in
                                </PrimaryButton>
                            </div>
                        </form>
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
                        <h3 className="text-xl font-bold">
                            Welcome to Cashcloudy
                        </h3>
                        <p className="mt-2 text-center">
                            Join us today and experience our seamless services.
                            Already have an account? Just sign in and get
                            started!
                        </p>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
