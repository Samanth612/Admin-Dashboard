import React from "react";
import { motion } from "framer-motion";
import { UserCheck, UserPlus, UsersIcon, UserX } from "lucide-react";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import UsersTable from "../components/users/UsersTable";
import UserGrowthChart from "../components/users/UserGrowthChart";
import UserActivityHeatmap from "../components/users/UserActivityHeatmap";
import UserDemographicsChart from "../components/users/UserDemographicsChart";

const userStats = {
  totalUsers: 152845,
  newUsersToday: 243,
  activeUsers: 98520,
  churnRate: "2.4%",
};

const UsersPage: React.FC = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Users" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* STATS */}

        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Users"
            Icon={UsersIcon}
            value={userStats.totalUsers.toLocaleString()}
            color="#6366F1"
          />
          <StatCard
            name="New Users Today"
            Icon={UserPlus}
            value={userStats.newUsersToday.toLocaleString()}
            color="#10B981"
          />
          <StatCard
            name="Active Users"
            Icon={UserCheck}
            value={userStats.activeUsers.toLocaleString()}
            color="#F59E0B"
          />
          <StatCard
            name="Churn Rate"
            Icon={UserX}
            value={userStats.churnRate}
            color="#EF4444"
          />
        </motion.div>

        {/* USERTABLE */}

        <UsersTable />

        {/* USERCHART */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <UserGrowthChart />
          <UserActivityHeatmap />
          <UserDemographicsChart />
        </div>
      </main>
    </div>
  );
};

export default UsersPage;
