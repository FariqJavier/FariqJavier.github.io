import React, { useState, useEffect } from "react";
interface ProfileProps {
    name: string;
    description: string;
    profileTags: string[];
    profileIconUrl: string;
    linkedInUrl: string;
    resumeUrl: string;
}

const Profile: React.FC = () => {
    const [profileData, setProfile] = useState<ProfileProps | null>(null);

    useEffect(() => {
        fetch("/assets/portfolio_profile_data.json")
        .then((res) => res.json())
        .then((data) => {
            // Pick only what you need
            const { name, description, profileTags, profileIconUrl, linkedInUrl, resumeUrl } = data;
            setProfile({ name, description, profileTags, profileIconUrl, linkedInUrl, resumeUrl });
        })
        .catch((err) => console.error("Error loading profile data:", err));
    }, []);

    if (!profileData) return <p>Loading...</p>;

    return (
        <section className="bg-white text-black py-16" id="profile">
            <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between">
                <div className="flex justify-end lg:w-1/3 mb-8 lg:mb-0">
                    <img
                        src={profileData.profileIconUrl}
                        alt="Profile Icon"
                        className="rounded-full w-32 h-32 mt-2"
                    />
                </div>
                <div className="flex flex-col lg:ml-6 lg:w-2/3 text-center lg:text-left">
                    <h2 className="text-3xl font-bold ml-2">{profileData.name}</h2>
                    <div className="flex flex-wrap gap-2 mt-4 ml-2 justify-center lg:justify-start">
                        {profileData.profileTags.map((tag, index) => (
                            <span key={index} className="bg-gray-200 py-1 px-5 rounded-full text-xs">{tag}</span>
                        ))}
                    </div>
                    <p className="mt-4 ml-2 text-md lg:max-w-xl max-w-md">
                        {profileData.description}
                    </p>
                </div>
                <div className="flex flex-col lg:w-1/3 text-center lg:text-left gap-4 lg:mt-0">
                    <a
                        href={profileData.linkedInUrl}
                        className="inline-block border-2 bg-transparent border-gray-700 text-gray-700 px-4 py-2 mx-auto mt-6 rounded-lg hover:bg-gray-300 hover:text-gray-900 font-bold text-sm"
                    >
                        Connect on LinkedIn
                    </a>
                    <a
                        href={profileData.resumeUrl}
                        download="resume.pdf"
                        className="inline-block bg-black text-white px-4 py-2 mx-auto rounded-lg hover:bg-gray-800 font-bold text-sm"
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Profile;
