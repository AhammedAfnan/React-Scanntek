import React, {useState,FormEvent,ChangeEvent} from "react";

const LoginPage:React.FC = () => {
    const [email, setEmail]=useState<string>('');
    const [password, setPassword]=useState<string>('');

    const handleSubmit = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
    }
    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
      };
      const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
      };

      return (
        <div className="flex justify-center items-center min-h-screen bg-black">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                    <img src="" alt="Laptop" className="w-full h-auto" />
                </div>
                <div className="md:w-1/2 p-8">
                    <h2 className="text-white text-2xl font-bold mb-4">Welcome to the future of restaurant reporting!</h2>
                    <p className="text-white mb-8">We're serving up a fresh approach to streamline your restaurant management, making data deliciously easy to digest.</p>
                    <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              className="bg-gray-800 rounded-lg py-2 px-4 mb-4 w-full text-white"
              required
            />
            <div className="relative mb-4">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                className="bg-gray-800 rounded-lg py-2 px-4 w-full text-white"
                required
              />
              <i className="fas fa-eye text-gray-400 absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"></i> {/* Eye icon */}
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2 px-4 w-full">Login</button>
          </form>
          <p className="text-gray-400 mt-4">
            By continuing, you agree to (name)'s Terms of service and Privacy policy.
          </p>
                </div>
            </div>
        </div>
      )
}

export default LoginPage;