import { useState } from "react";
import { motion } from "framer-motion";
import { useMutation } from "react-query";
import { resetPassword } from "../api/authAPI"; // Your API function
import { useNavigate, useSearchParams } from "react-router-dom";
import Input from "../components/Input";
import { Lock } from "lucide-react";
import toast from "react-hot-toast";

// Define the type for the mutation variables
interface ResetPasswordVariables {
	token: string;
	password: string;
}

const ResetPasswordPage = () => {
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	// Use useSearchParams to access the token query parameter
	const [searchParams] = useSearchParams();
	const token = searchParams.get("token");
    console.log(token) // Ensure token is typed as string
	const navigate = useNavigate();

	// React Query mutation for resetting password
	const { mutate, isLoading, isError, error } = useMutation<void, Error, ResetPasswordVariables>({
		mutationFn: ({ token, password }) => resetPassword(token, password), // Properly typed mutation function
		onSuccess: () => {
			toast.success("Password reset successfully, redirecting to login page...");
			setTimeout(() => {
				navigate("/signin"); // Redirect to login after 2 seconds
			}, 2000);
		},
		onError: (error) => {
			toast.error(error.message || "Error resetting password");
		},
	});

	const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
      
        console.log("Form submitted"); // Debugging: Check if this logs
      
        // Check if passwords match
        if (password !== confirmPassword) {
          toast.error("Passwords do not match");
          return;
        }
      
        // Ensure token is defined
        if (!token) {
          toast.error("Invalid token");
          return;
        }
      
        console.log("Calling mutate function"); // Debugging: Check if this logs
        mutate({ token, password });
      };

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className='max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden'
		>
			<div className='p-8'>
				<h2 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text'>
					Reset Password
				</h2>
				{isError && <p className='text-red-500 text-sm mb-4'>{error.message}</p>}

				<form onSubmit={handleSubmit}>
					<Input
						icon={Lock}
						type='password'
						placeholder='New Password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>

					<Input
						icon={Lock}
						type='password'
						placeholder='Confirm New Password'
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						required
					/>

					<motion.button
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						className='w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200'
						type='submit'
						disabled={isLoading}
					>
						{isLoading ? "Resetting..." : "Set New Password"}
					</motion.button>
				</form>
			</div>
		</motion.div>
	);
};

export default ResetPasswordPage;