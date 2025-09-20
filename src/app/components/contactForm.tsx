import { useForm, ValidationError } from "@formspree/react";
import type { HeaderInterface } from "../interfaces/headerInterFace";
import { useState } from "react";
import { CheckCircle, Send } from "lucide-react";

export default function ContactForm({ isDarkMode }: Pick<HeaderInterface, 'isDarkMode'>) {
    const [state, handleSubmit] = useForm("xknlnwzy");
    const [isSubmitted, setIsSubmitted] = useState(false);

    if (state.succeeded) {
        setIsSubmitted(true);
        return <p>Thanks for joining!</p>;;
    }
    return (
        <div className={isDarkMode ? 'dark' : ''}>
            <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                    <input
                        name="name"
                        id="name"
                        type="text"
                        required
                        placeholder="Your Name"
                        className={`w-full px-6 py-4 rounded-xl transition-all duration-300 focus:scale-105 focus:shadow-lg ${isDarkMode
                            ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400 focus:bg-gray-700'
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:bg-gray-50'
                            } border-2 focus:outline-none`}
                    />
                    <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                    />
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        placeholder="Your Email"
                        className={`w-full px-6 py-4 rounded-xl transition-all duration-300 focus:scale-105 focus:shadow-lg ${isDarkMode
                            ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-green-400 focus:bg-gray-700'
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-green-500 focus:bg-gray-50'
                            } border-2 focus:outline-none`}
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                    <input
                        type="text"
                        name="subject"
                        id="subject"
                        required
                        placeholder="Subject"
                        className={`w-full px-6 py-4 rounded-xl transition-all duration-300 focus:scale-105 focus:shadow-lg ${isDarkMode
                            ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-purple-400 focus:bg-gray-700'
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-purple-500 focus:bg-gray-50'
                            } border-2 focus:outline-none`}
                    />
                    <ValidationError
                        prefix="Subject"
                        field="subject"
                        errors={state.errors}
                    />

                    <textarea
                        name="message"
                        id="message"
                        placeholder="Message"
                        required
                        rows={6}
                        className={`w-full px-6 py-4 rounded-xl transition-all duration-300 focus:scale-105 focus:shadow-lg resize-none ${isDarkMode
                            ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-pink-400 focus:bg-gray-700'
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-pink-500 focus:bg-gray-50'
                            } border-2 focus:outline-none`}
                    ></textarea>
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                    <button
                        type="submit" disabled={state.submitting}
                        className={`w-full py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 ${isSubmitted
                            ? 'bg-green-500 text-white'
                            : 'bg-gradient-to-r from-indigo-500 to-purple-700 hover:from-indigo-600 hover:to-purple-800 dark:from-yellow-400 dark:to-orange-500 dark:hover:from-yellow-500 dark:hover:to-orange-600 text-white'
                            } shadow-lg hover:shadow-xl flex items-center justify-center space-x-2`}
                    >
                        {isSubmitted ? (
                            <>
                                <CheckCircle className="w-5 h-5" />
                                <span>MESSAGE SENT!</span>
                            </>
                        ) : (
                            <>
                                <Send className="w-5 h-5" />
                                <span>SEND MESSAGE</span>
                            </>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}