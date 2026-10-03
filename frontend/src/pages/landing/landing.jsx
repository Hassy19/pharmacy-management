import { ShieldCheck, Stethoscope, WalletCards } from "lucide-react";

const roles = [
  {
    id: "admin",
    title: "Admin",
    description:
      "Manage the entire pharmacy, inventory, purchases, sales, suppliers and reports.",
    icon: ShieldCheck,
  },
  {
    id: "pharmacist",
    title: "Pharmacist",
    description:
      "Create sales, manage customers, select medicines and release approved orders.",
    icon: Stethoscope,
  },
  {
    id: "finance",
    title: "Finance",
    description:
      "Review pending sales and accept or decline payment requests.",
    icon: WalletCards,
  },
];

function Landing() {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <div className="landing-header">
          <div className="logo-mark">P</div>

          <div>
            <h1>Pharmacy Management System</h1>
            <p>Select your workspace to continue</p>
          </div>
        </div>

        <div className="role-grid">
          {roles.map((role) => {
            const Icon = role.icon;

            return (
              <button
                key={role.id}
                className="role-card"
                onClick={() => {
                  window.location.href = `/${role.id}`;
                }}
              >
                <div className="role-icon">
                  <Icon size={28} />
                </div>

                <div className="role-card-content">
                  <h2>{role.title}</h2>
                  <p>{role.description}</p>
                </div>

                <span className="role-arrow">→</span>
              </button>
            );
          })}
        </div>

        <p className="landing-footer">
          Pharmacy operations management system
        </p>
      </div>
    </div>
  );
}

export default Landing;