import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import Applayout from "@/Layouts/Applayout";
import React from "react";
import { Button } from "@/Components/ui/button";
import { Settings } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import ProfileSidebar from "@/Components/profile/profile-sidebar";
import DigitalSignature from "@/Components/profile/digital-signature";
import HistoryLog from "@/Components/profile/history-log";
import UserPreferences from "@/Components/profile/user-preferences";

const breadcrumb = [
    {
        title: "Home",
        url: "/dashboard",
    },
    {
        title: "Profile",
        url: "/profile",
    },
];

export default function Edit({
    mustVerifyEmail,
    status,
}: PageProps<{ mustVerifyEmail: boolean; status?: string }>) {
    const [activeTab, setActiveTab] = React.useState("overview");

    return (
        <Applayout breadcrumbs={breadcrumb} title="Profile">
            <div className="min-h-screen">
                {/* Header */}
                <div className="border-b border-gray-200">
                    <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
                        <h1 className="text-3xl font-bold">
                            Profile Page
                        </h1>
                    </div>
                </div>

                {/* Navigation Tabs */}
                <div className="border-b border-gray-200">
                    <div className="mx-auto max-w-7xl px-6">
                        <Tabs value={activeTab} onValueChange={setActiveTab}>
                            <TabsList className="h-auto bg-transparent p-0">
                                <TabsTrigger
                                    value="overview"
                                    className="rounded-none border-b-2 border-transparent px-0 py-4 font-medium  data-[state=active]:border-gray-900"
                                >
                                    Overview
                                </TabsTrigger>
                                <TabsTrigger
                                    value="projects"
                                    className="rounded-none border-b-2 border-transparent px-6 py-4 font-medium  data-[state=active]:border-gray-900 "
                                >
                                    My Task
                                </TabsTrigger>
                                <TabsTrigger
                                    value="activities"
                                    className="rounded-none border-b-2 border-transparent px-6 py-4 font-medium  data-[state=active]:border-gray-900 "
                                >
                                    Activities
                                </TabsTrigger>
                                <TabsTrigger
                                    value="members"
                                    className="rounded-none border-b-2 border-transparent px-6 py-4 font-medium  data-[state=active]:border-gray-900 "
                                >
                                    Documents
                                </TabsTrigger>
                            </TabsList>
                        </Tabs>
                    </div>
                </div>

                {/* Main Content */}
                <div className="mx-auto max-w-7xl px-6 py-8">
                    {activeTab === "overview" && (
                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                            {/* Left Sidebar */}
                            <ProfileSidebar />

                            {/* Right Content */}
                            <div className="space-y-8 lg:col-span-2">

                                <div className="flex flex-col gap-4">
                                    <DigitalSignature />
                                    <HistoryLog />
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "projects" && (
                        <div className="text-center py-12">
                            <p className="">
                                Projects content coming soon
                            </p>
                        </div>
                    )}

                    {activeTab === "activities" && (
                        <div className="text-center py-12">
                            <p className="">
                                Activities content coming soon
                            </p>
                        </div>
                    )}

                    {activeTab === "members" && (
                        <div className="text-center py-12">
                            <p className="">
                                Members content coming soon
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </Applayout>
    );
}
