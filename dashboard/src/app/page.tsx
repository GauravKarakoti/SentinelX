export default function DashboardHome() {
  // TODO: Fetch dashboard statistics (total assets, open vulns, recent scans) from API

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">SentinelX Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* TODO: Create reusable StatCard component */}
        <div className="p-6 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold">Total Assets</h2>
          <p className="text-gray-500 mt-2">{/* TODO: Render asset count */}</p>
        </div>

        <div className="p-6 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold">Open Vulnerabilities</h2>
          <p className="text-gray-500 mt-2">{/* TODO: Render vulnerability count grouped by severity */}</p>
        </div>

        <div className="p-6 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold">Active Scans</h2>
          <p className="text-gray-500 mt-2">{/* TODO: Render running scan jobs */}</p>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Recent Findings</h2>
        {/* TODO: Implement paginated data table for vulnerabilities */}
        <div className="p-8 text-center text-gray-500 border rounded-lg border-dashed">
          {/* TODO: Vulnerability Table Component Goes Here */}
        </div>
      </section>
    </main>
  );
}