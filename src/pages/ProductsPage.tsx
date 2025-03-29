import React from "react";
import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import { AlertTriangle, DollarSign, Package, TrendingUp } from "lucide-react";
import ProductsTable from "../components/product/ProductsTable";
import SalesTrendChart from "../components/product/SalesTrendChart";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";

const ProductsPage: React.FC = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Products" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* STATS */}

        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Products"
            Icon={Package}
            value="1234"
            color="#6366F1"
          />
          <StatCard
            name="Top Selling"
            Icon={TrendingUp}
            value="89"
            color="#8B5CF6"
          />
          <StatCard
            name="Low Stock"
            Icon={AlertTriangle}
            value="23"
            color="#EC4899"
          />
          <StatCard
            name="Total Revenue"
            Icon={DollarSign}
            value="$543,210"
            color="#10B981"
          />
        </motion.div>

        <ProductsTable />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SalesTrendChart />
          <CategoryDistributionChart />
        </div>
      </main>
    </div>
  );
};

export default ProductsPage;
