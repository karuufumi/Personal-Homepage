export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  status: string;
  progress: "IN PROGRESS" | "COMPLETE";
  problem: string;
  features: string[];
  learned: string;
};

export const projects: Project[] = [
  {
    slug: "container-security-sandbox",
    title: "Container Security Testing Sandbox",
    description: "A sandboxed testing platform for evaluating containerized applications under restricted runtime policies.",
    tags: ["Go", "Docker", "Security", "Runtime", "Testing"],
    status: "Current build",
    progress: "IN PROGRESS",
    problem: "Testing container behavior safely often means choosing between broad permissions and shallow results. This project creates a repeatable, restricted environment for observing runtime behavior without weakening the host.",
    features: ["Policy-driven container profiles", "Isolated runtime test suites", "Structured event capture and reports", "Repeatable local developer workflow"],
    learned: "Security tooling is most useful when the safe path is also the easy path. Clear policy boundaries and observable execution make the system practical to use.",
  },
  {
    slug: "orion-observability",
    title: "Orion Observability Platform",
    description: "A real-time observability and anomaly investigation platform for service metrics and alerts.",
    tags: ["Go", "TypeScript", "Metrics", "Observability"],
    status: "System build",
    progress: "COMPLETE",
    problem: "Metrics only help when teams can connect a signal to a service, event, and useful next action. Orion turns scattered telemetry into an investigation surface.",
    features: ["Live metric ingestion pipeline", "Alert correlation and investigation views", "Service health timelines", "Focused dashboard workflows"],
    learned: "Observability UI needs a strong information hierarchy. The product should reduce uncertainty, not simply expose more numbers.",
  },
  {
    slug: "distributed-order-fulfillment",
    title: "Distributed Order Fulfillment Platform",
    description: "A saga-based transaction orchestration platform for resilient order fulfillment workflows.",
    tags: ["Java", "Go", "RabbitMQ", "PostgreSQL", "Saga Pattern"],
    status: "Thesis track",
    progress: "IN PROGRESS",
    problem: "Order fulfillment spans inventory, payments, and shipping systems that cannot share one transaction. The platform coordinates each durable step and handles failures explicitly.",
    features: ["Saga orchestration flow", "Event-driven service boundaries", "Compensating transaction support", "Durable workflow state"],
    learned: "Distributed transactions demand deliberate failure design. Treating recovery as a first-class workflow makes the architecture easier to reason about.",
  },
];
