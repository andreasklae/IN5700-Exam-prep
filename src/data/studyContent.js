// Comprehensive study content for IN5700 Fog and Cloud Computing
export const topics = [
  {
    id: 'intro-fog',
    title: 'Introduction to Fog Computing',
    icon: '☁️',
    color: 'from-blue-500 to-cyan-500',
    description: 'Fundamentals of fog computing architecture and principles',
    subtopics: [
      {
        id: 'fog-basics',
        title: 'Fog Computing Basics',
        content: `Fog computing extends cloud computing and services to the edge of the network. It brings computation, storage, and networking services closer to end-users and IoT devices.

Key Characteristics:
• Low latency: Data processing happens closer to data sources
• Location awareness: Services are aware of their geographic location
• Distributed architecture: Resources are distributed across the network
• Real-time interactions: Enables time-sensitive applications
• Heterogeneity: Supports diverse device types and protocols`,
        keyPoints: [
          'Fog computing is between cloud and IoT devices',
          'Reduces latency by processing data at the edge',
          'Supports location-aware services',
          'Enables real-time applications',
          'Complements rather than replaces cloud computing'
        ]
      },
      {
        id: 'fog-vs-cloud',
        title: 'Fog vs Cloud Computing',
        content: `Understanding the differences between fog and cloud computing is crucial:

Cloud Computing:
• Centralized data centers
• High computational power
• Higher latency
• Better for batch processing
• Economies of scale

Fog Computing:
• Distributed edge nodes
• Lower latency
• Location awareness
• Real-time processing
• Better for IoT applications`,
        keyPoints: [
          'Cloud is centralized, fog is distributed',
          'Fog has lower latency than cloud',
          'Fog is better for real-time IoT applications',
          'Cloud has more computational resources',
          'Both can work together in hybrid architectures'
        ]
      },
      {
        id: 'fog-architecture',
        title: 'Fog Computing Architecture',
        content: `The fog computing architecture consists of multiple layers:

Three-Tier Architecture:
1. Cloud Layer: Centralized data centers for heavy computation and storage
2. Fog Layer: Edge servers, gateways, and fog nodes for intermediate processing
3. IoT/Edge Layer: End devices, sensors, and actuators

Key Components:
• Fog Nodes: Devices that provide compute, storage, and networking
• Fog Orchestrator: Manages resource allocation and task distribution
• API Layer: Enables communication between layers
• Security Components: Authentication, encryption, access control`,
        keyPoints: [
          'Three-layer architecture: Cloud, Fog, IoT',
          'Fog nodes provide distributed computation',
          'Orchestration manages resource allocation',
          'APIs enable inter-layer communication',
          'Security is implemented at all layers'
        ]
      },
      {
        id: 'use-cases',
        title: 'Fog Computing Use Cases',
        content: `Fog computing enables various real-world applications:

1. Smart Cities:
   • Traffic management
   • Smart lighting
   • Environmental monitoring
   • Public safety systems

2. Industrial IoT:
   • Predictive maintenance
   • Real-time monitoring
   • Quality control
   • Supply chain optimization

3. Healthcare:
   • Remote patient monitoring
   • Wearable health devices
   • Emergency response systems
   • Medical data analytics

4. Autonomous Vehicles:
   • Real-time navigation
   • V2V communication
   • Collision avoidance
   • Traffic optimization`,
        keyPoints: [
          'Smart cities benefit from low-latency fog computing',
          'Industrial IoT requires real-time processing',
          'Healthcare applications need reliable edge computing',
          'Autonomous vehicles depend on ultra-low latency',
          'Fog enables time-critical applications'
        ]
      }
    ]
  },
  {
    id: 'security',
    title: 'Security Issues',
    icon: '🔒',
    color: 'from-red-500 to-pink-500',
    description: 'Security challenges and solutions in fog computing',
    subtopics: [
      {
        id: 'security-challenges',
        title: 'Security Challenges in Fog',
        content: `Fog computing introduces unique security challenges:

Distributed Nature:
• Multiple attack surfaces
• Difficult to secure all nodes
• Inconsistent security policies
• Physical security concerns

Resource Constraints:
• Limited computational power for encryption
• Battery constraints on edge devices
• Cannot run complex security algorithms
• Trade-off between security and performance

Network Security:
• Insecure communication channels
• Man-in-the-middle attacks
• Eavesdropping risks
• DDoS attacks on fog nodes`,
        keyPoints: [
          'Distributed architecture increases attack surface',
          'Edge devices have limited security capabilities',
          'Physical access to fog nodes is a risk',
          'Network communication must be secured',
          'Balance between security and performance is critical'
        ]
      },
      {
        id: 'authentication',
        title: 'Authentication & Access Control',
        content: `Ensuring proper authentication in fog environments:

Authentication Methods:
• Multi-factor authentication (MFA)
• Certificate-based authentication
• Biometric authentication
• Token-based systems

Access Control Models:
• Role-Based Access Control (RBAC)
• Attribute-Based Access Control (ABAC)
• Capability-based access control
• Distributed access control

Key Challenges:
• Identity management across distributed nodes
• Revoking access in real-time
• Scalability of authentication systems
• Lightweight authentication for IoT devices`,
        keyPoints: [
          'MFA enhances security but adds complexity',
          'RBAC and ABAC are common access control models',
          'Identity management is challenging in distributed systems',
          'Lightweight auth protocols needed for IoT',
          'Certificate management is crucial'
        ]
      },
      {
        id: 'data-security',
        title: 'Data Security & Privacy',
        content: `Protecting data in fog computing environments:

Data Protection Techniques:
• Encryption at rest and in transit
• Data anonymization
• Differential privacy
• Secure multi-party computation

Privacy Concerns:
• Location privacy
• User behavior tracking
• Data ownership issues
• Compliance with regulations (GDPR)

Security Measures:
• End-to-end encryption
• Secure storage mechanisms
• Data sanitization
• Privacy-preserving computation`,
        keyPoints: [
          'Encrypt data both at rest and in transit',
          'Anonymization protects user privacy',
          'Location data requires special protection',
          'GDPR compliance is mandatory in EU',
          'Privacy-preserving techniques enable secure computation'
        ]
      },
      {
        id: 'security-solutions',
        title: 'Security Solutions',
        content: `Implementing security in fog computing:

Cryptographic Solutions:
• Lightweight encryption algorithms (e.g., AES-GCM)
• Public Key Infrastructure (PKI)
• Blockchain for trust and integrity
• Homomorphic encryption for privacy

Network Security:
• VPNs and secure tunnels
• Intrusion Detection Systems (IDS)
• Firewalls at fog nodes
• Network segmentation

Trust Management:
• Reputation-based systems
• Trust models for fog nodes
• Continuous monitoring
• Anomaly detection`,
        keyPoints: [
          'Lightweight crypto suitable for edge devices',
          'Blockchain can provide trust and immutability',
          'IDS helps detect attacks in real-time',
          'Trust management is crucial in distributed systems',
          'Multi-layered security approach is best'
        ]
      }
    ]
  },
  {
    id: 'replication',
    title: 'Replication',
    icon: '📋',
    color: 'from-green-500 to-emerald-500',
    description: 'Data and service replication strategies',
    subtopics: [
      {
        id: 'replication-basics',
        title: 'Replication Fundamentals',
        content: `Replication is crucial for availability and performance:

Why Replication?
• Fault tolerance: System continues if nodes fail
• Load balancing: Distribute requests across replicas
• Reduced latency: Access data from nearby replicas
• Increased availability: Multiple copies ensure access

Types of Replication:
• Active Replication: All replicas process requests
• Passive Replication: Primary processes, backups standby
• Semi-active: Hybrid approach

Key Challenges:
• Consistency maintenance
• Update propagation
• Conflict resolution
• Resource overhead`,
        keyPoints: [
          'Replication improves fault tolerance and availability',
          'Active vs passive replication have different trade-offs',
          'Maintaining consistency is challenging',
          'Replicas reduce latency by geographical distribution',
          'Replication adds storage and network overhead'
        ]
      },
      {
        id: 'consistency-models',
        title: 'Consistency Models',
        content: `Different consistency models for replicated data:

Strong Consistency:
• All replicas see the same data at the same time
• Requires synchronization
• Higher latency, lower availability

Eventual Consistency:
• Replicas eventually converge to same state
• Higher availability, lower latency
• Temporary inconsistencies allowed

Causal Consistency:
• Maintains causally related operations order
• Balance between strong and eventual
• Good for collaborative applications

CAP Theorem:
• Consistency, Availability, Partition tolerance
• Can only guarantee two of three
• Fog systems often choose AP or CP`,
        keyPoints: [
          'Strong consistency provides guarantees but hurts performance',
          'Eventual consistency is common in distributed systems',
          'CAP theorem forces trade-offs',
          'Causal consistency is a middle ground',
          'Choose consistency model based on application needs'
        ]
      },
      {
        id: 'replication-strategies',
        title: 'Replication Strategies',
        content: `Various strategies for replicating data in fog:

Static Replication:
• Fixed number of replicas
• Predetermined locations
• Simple but inflexible

Dynamic Replication:
• Adapts to workload and failures
• Creates/removes replicas as needed
• More complex but efficient

Placement Strategies:
• Proximity-based: Near users
• Load-based: Balance across nodes
• Cost-based: Optimize for resources
• Hybrid approaches

Update Propagation:
• Push-based: Primary pushes to replicas
• Pull-based: Replicas pull from primary
• Lease-based: Time-bounded validity`,
        keyPoints: [
          'Dynamic replication adapts to changing conditions',
          'Placement strategy affects performance',
          'Push vs pull affects consistency and overhead',
          'Consider network bandwidth for updates',
          'Hybrid strategies often work best'
        ]
      },
      {
        id: 'conflict-resolution',
        title: 'Conflict Resolution',
        content: `Handling conflicts in replicated systems:

Conflict Detection:
• Version vectors
• Timestamps
• Logical clocks (Lamport, Vector)
• Merkle trees

Resolution Strategies:
• Last-Write-Wins (LWW): Simple but may lose data
• Version vectors: Track causality
• Application-specific: Custom logic
• CRDT: Conflict-free replicated data types

Consensus Algorithms:
• Paxos: Strong consistency guarantee
• Raft: More understandable than Paxos
• Byzantine Fault Tolerance: Handles malicious nodes
• Quorum-based: Majority voting`,
        keyPoints: [
          'Conflicts arise from concurrent updates',
          'Version vectors track causality',
          'CRDTs eliminate conflicts by design',
          'Consensus algorithms ensure agreement',
          'Resolution strategy depends on application'
        ]
      }
    ]
  },
  {
    id: 'cyberforaging',
    title: 'Cyberforaging',
    icon: '📱',
    color: 'from-purple-500 to-pink-500',
    description: 'Offloading computation from mobile devices',
    subtopics: [
      {
        id: 'cyberforaging-intro',
        title: 'Cyberforaging Introduction',
        content: `Cyberforaging enables resource-constrained devices to leverage external resources:

Core Concept:
• Mobile devices offload computation to powerful servers
• Extends battery life of mobile devices
• Enables resource-intensive applications
• Improves application performance

Key Components:
• Client: Resource-constrained mobile device
• Surrogate: Nearby server with more resources
• Discovery: Finding available surrogates
• Offloading: Transferring computation

Benefits:
• Reduced energy consumption
• Faster computation
• Enables complex applications on simple devices
• Extends device capabilities`,
        keyPoints: [
          'Cyberforaging = computational offloading',
          'Extends battery life and performance',
          'Requires nearby powerful servers (surrogates)',
          'Discovery mechanism finds available resources',
          'Trade-off between communication and computation cost'
        ]
      },
      {
        id: 'offloading-decisions',
        title: 'Offloading Decisions',
        content: `Deciding when and what to offload:

Decision Factors:
• Computation complexity: Heavy tasks benefit from offloading
• Data size: Large data transfer may negate benefits
• Network conditions: Bandwidth and latency matter
• Energy constraints: Battery level influences decisions
• Application requirements: Real-time vs batch processing

Offloading Models:
• Full offloading: Entire application runs remotely
• Partial offloading: Only computation-intensive parts
• Adaptive offloading: Dynamic based on conditions

Cost Models:
• Energy cost: Battery consumption
• Time cost: Execution + communication time
• Monetary cost: Cloud resource usage
• Combined optimization`,
        keyPoints: [
          'Not all tasks benefit from offloading',
          'Consider computation vs communication trade-off',
          'Network conditions affect offloading decisions',
          'Adaptive strategies perform better',
          'Energy, time, and cost must be balanced'
        ]
      },
      {
        id: 'mobile-edge-computing',
        title: 'Mobile Edge Computing (MEC)',
        content: `MEC brings computation to the edge of mobile networks:

Architecture:
• Base stations equipped with compute servers
• Radio access network (RAN) with processing
• Close proximity to mobile users
• Integration with 5G networks

Advantages:
• Ultra-low latency (1-10ms)
• High bandwidth
• Location awareness
• Mobility support
• Network efficiency

Use Cases:
• Augmented Reality (AR)
• Virtual Reality (VR)
• Real-time gaming
• Video analytics
• IoT applications`,
        keyPoints: [
          'MEC places compute resources at base stations',
          'Enables ultra-low latency applications',
          '5G and MEC are complementary',
          'Perfect for AR/VR applications',
          'Reduces backhaul network traffic'
        ]
      },
      {
        id: 'cloudlets',
        title: 'Cloudlets',
        content: `Cloudlets are trusted, resource-rich computers near mobile users:

Cloudlet Characteristics:
• Located at network edge (coffee shops, airports)
• Trust relationship with users
• Soft state: No permanent storage
• Discoverable by nearby devices
• Self-managing and self-configuring

Architecture:
• Base VM: Minimal trusted software
• VM Overlay: Application-specific modifications
• Quick provisioning (seconds, not minutes)
• Snapshot-based state management

Advantages:
• Lower latency than cloud
• Better bandwidth
• Privacy preservation (data stays local)
• Reduced WAN dependence
• Cost-effective for mobile users`,
        keyPoints: [
          'Cloudlets are micro-data centers at the edge',
          'VM-based approach enables quick provisioning',
          'Soft state means no permanent data',
          'Trust model is important for security',
          'Bridges gap between mobile and cloud'
        ]
      }
    ]
  },
  {
    id: 'load-balancing',
    title: 'Load Balancing',
    icon: '⚖️',
    color: 'from-yellow-500 to-orange-500',
    description: 'Distributing workload across fog resources',
    subtopics: [
      {
        id: 'load-balancing-intro',
        title: 'Load Balancing Basics',
        content: `Load balancing distributes workload across multiple resources:

Goals:
• Maximize resource utilization
• Minimize response time
• Avoid overloading any single node
• Maintain system stability
• Improve fault tolerance

Types of Load Balancing:
• Static: Fixed algorithms, no runtime adaptation
• Dynamic: Adapts based on current system state
• Centralized: Single load balancer decides
• Distributed: Nodes coordinate to balance load

Key Metrics:
• Response time
• Throughput
• Resource utilization (CPU, memory, network)
• Queue length
• Energy consumption`,
        keyPoints: [
          'Load balancing improves performance and reliability',
          'Dynamic strategies adapt to changing conditions',
          'Must consider multiple resources (CPU, network, etc.)',
          'Trade-off between complexity and effectiveness',
          'Fog computing requires distributed load balancing'
        ]
      },
      {
        id: 'load-balancing-algorithms',
        title: 'Load Balancing Algorithms',
        content: `Various algorithms for load balancing in fog:

Static Algorithms:
• Round Robin: Rotate through servers sequentially
• Weighted Round Robin: Account for server capacity
• Random: Assign to random server
• Hash-based: Use request hash for consistent routing

Dynamic Algorithms:
• Least Connections: Route to server with fewest connections
• Least Response Time: Choose fastest responding server
• Resource-based: Consider CPU, memory availability
• Adaptive: Learn from past performance

Fog-Specific:
• Location-aware: Consider geographical proximity
• Latency-based: Minimize end-to-end latency
• Energy-aware: Balance energy consumption
• QoS-aware: Meet service level objectives`,
        keyPoints: [
          'Static algorithms are simple but inflexible',
          'Dynamic algorithms perform better in changing conditions',
          'Location awareness is crucial in fog',
          'Energy-aware balancing extends device lifetime',
          'Hybrid approaches often work best'
        ]
      },
      {
        id: 'scheduling',
        title: 'Task Scheduling',
        content: `Scheduling tasks in fog computing environments:

Scheduling Objectives:
• Minimize makespan (total completion time)
• Minimize energy consumption
• Meet deadlines (real-time constraints)
• Maximize throughput
• Balance load across nodes

Scheduling Approaches:
• Immediate: Assign tasks as they arrive
• Batch: Collect tasks and schedule together
• Online: Don't know future tasks
• Offline: Know all tasks in advance

Algorithms:
• First Come First Serve (FCFS)
• Shortest Job First (SJF)
• Earliest Deadline First (EDF)
• Priority-based scheduling
• Genetic algorithms for optimization`,
        keyPoints: [
          'Scheduling determines which task runs where and when',
          'Multiple conflicting objectives must be balanced',
          'Online algorithms more realistic but challenging',
          'Real-time tasks need deadline-aware scheduling',
          'Heuristics and meta-heuristics often used'
        ]
      },
      {
        id: 'qos-management',
        title: 'QoS Management',
        content: `Ensuring Quality of Service in fog computing:

QoS Parameters:
• Latency: Response time requirements
• Bandwidth: Data transfer rate needs
• Reliability: Uptime and fault tolerance
• Availability: Service accessibility
• Security: Protection requirements

QoS Levels:
• Best Effort: No guarantees
• Differentiated Services: Priority-based
• Integrated Services: Resource reservation
• SLA-based: Contractual guarantees

Techniques:
• Resource reservation
• Admission control
• Priority queuing
• Traffic shaping
• Service differentiation`,
        keyPoints: [
          'QoS ensures applications meet requirements',
          'Different applications need different QoS',
          'Resource reservation guarantees performance',
          'Admission control prevents overload',
          'SLAs define measurable QoS metrics'
        ]
      }
    ]
  },
  {
    id: 'simulators',
    title: 'Fog Simulators',
    icon: '🎮',
    color: 'from-indigo-500 to-blue-500',
    description: 'Simulation tools for fog computing research',
    subtopics: [
      {
        id: 'simulation-importance',
        title: 'Why Simulation?',
        content: `Simulation is crucial for fog computing research:

Challenges of Real Deployment:
• High cost of physical infrastructure
• Difficult to replicate experiments
• Hard to test at scale
• Safety concerns for critical applications
• Time-consuming setup

Benefits of Simulation:
• Cost-effective experimentation
• Reproducible results
• Easy to test various scenarios
• Scale to thousands of nodes
• Safe testing of failure scenarios
• Rapid prototyping

Simulation vs Emulation:
• Simulation: Model behavior mathematically
• Emulation: Run actual code on virtual resources
• Hybrid approaches combine both`,
        keyPoints: [
          'Real fog deployment is expensive and complex',
          'Simulation enables cost-effective research',
          'Reproducibility is key in scientific research',
          'Simulators allow testing at scale',
          'Both simulation and emulation have their place'
        ]
      },
      {
        id: 'popular-simulators',
        title: 'Popular Fog Simulators',
        content: `Overview of major fog computing simulators:

iFogSim:
• Extends CloudSim for fog computing
• Models fog devices and applications
• Supports resource management policies
• Energy consumption modeling
• Java-based, open source

EdgeCloudSim:
• Focuses on edge computing scenarios
• Network modeling with WLAN, WAN, MAN
• Mobility support for devices
• Easy to extend and customize
• Built on CloudSim

FogNetSim++:
• Event-driven network simulator
• Based on OMNET++
• Detailed network modeling
• Supports large-scale scenarios
• Complex network topologies

YAFS (Yet Another Fog Simulator):
• Python-based
• Dynamic topology
• Flexible application modeling
• Good for research and education`,
        keyPoints: [
          'iFogSim is most widely used',
          'EdgeCloudSim excels at mobility scenarios',
          'FogNetSim++ provides detailed network simulation',
          'Choose simulator based on research needs',
          'Most simulators are open source'
        ]
      },
      {
        id: 'simulation-models',
        title: 'Simulation Models',
        content: `Key components modeled in fog simulators:

Infrastructure Model:
• Physical topology
• Network links and bandwidth
• Fog nodes and cloud servers
• Device characteristics (CPU, RAM, storage)
• Energy consumption models

Application Model:
• Application modules and dependencies
• Communication patterns
• Resource requirements
• Data flow between modules
• QoS requirements

Network Model:
• Latency modeling
• Bandwidth constraints
• Network protocols
• Packet loss and jitter
• Mobility and handoffs

Workload Model:
• Request arrival patterns
• Data generation rates
• Task characteristics
• User behavior patterns`,
        keyPoints: [
          'Accurate models lead to valid results',
          'Infrastructure model defines hardware resources',
          'Application model represents user applications',
          'Network model critical for fog simulation',
          'Workload model should reflect reality'
        ]
      },
      {
        id: 'simulation-challenges',
        title: 'Simulation Challenges',
        content: `Limitations and challenges of fog simulation:

Accuracy vs Performance:
• Detailed models are slow
• Abstract models may miss important details
• Balance needed for practical simulation
• Validation against real systems

Scalability:
• Simulating thousands of nodes is challenging
• Memory constraints
• Computation time grows with scale
• Trade-off between detail and scale

Model Validity:
• How well does simulation match reality?
• Validation requires real-world data
• Models may oversimplify
• Difficult to capture all factors

Dynamic Behavior:
• Mobility modeling is complex
• Workload variations over time
• Failure and recovery scenarios
• Adaptive system behavior`,
        keyPoints: [
          'Simulation accuracy requires validation',
          'Scalability limits what can be simulated',
          'Models are simplifications of reality',
          'Dynamic scenarios are hard to model',
          'Results should be interpreted carefully'
        ]
      }
    ]
  },
  {
    id: 'containers',
    title: 'Containers & Docker',
    icon: '🐳',
    color: 'from-cyan-500 to-blue-500',
    description: 'Container technology for fog deployments',
    subtopics: [
      {
        id: 'container-basics',
        title: 'Container Fundamentals',
        content: `Containers provide lightweight application virtualization:

What are Containers?
• Isolated environments for applications
• Share host OS kernel
• Package application with dependencies
• Portable across different environments
• Lightweight compared to VMs

Containers vs VMs:
Virtual Machines:
• Full OS per instance
• Hardware virtualization
• Larger size (GBs)
• Slower startup (minutes)
• Strong isolation

Containers:
• Shared OS kernel
• OS-level virtualization
• Smaller size (MBs)
• Fast startup (seconds)
• Lightweight isolation`,
        keyPoints: [
          'Containers are lightweight virtualization',
          'Share kernel, isolate processes and filesystems',
          'Much faster and smaller than VMs',
          'Portability is a key advantage',
          'Perfect for microservices architecture'
        ]
      },
      {
        id: 'docker',
        title: 'Docker Platform',
        content: `Docker is the leading container platform:

Key Components:
• Docker Engine: Runtime for containers
• Docker Images: Read-only templates
• Docker Containers: Running instances of images
• Docker Registry: Image repository (Docker Hub)
• Docker Compose: Multi-container applications

Docker Architecture:
• Client-Server model
• Docker daemon runs containers
• REST API for communication
• CLI client for user interaction

Docker Images:
• Built in layers
• Base image + modifications
• Defined by Dockerfile
• Cached for efficiency
• Versioned with tags`,
        keyPoints: [
          'Docker is the most popular container platform',
          'Images are templates, containers are running instances',
          'Dockerfile defines how to build images',
          'Layered architecture enables caching',
          'Docker Hub provides public image repository'
        ]
      },
      {
        id: 'container-orchestration',
        title: 'Container Orchestration',
        content: `Managing containers at scale requires orchestration:

Challenges at Scale:
• Deploying many containers
• Service discovery
• Load balancing
• Health monitoring
• Rolling updates
• Resource management

Kubernetes (K8s):
• De facto standard for orchestration
• Automated deployment and scaling
• Self-healing capabilities
• Service discovery and load balancing
• Storage orchestration
• Configuration management

K8s Architecture:
• Master node: Control plane
• Worker nodes: Run containers
• Pods: Group of containers
• Services: Network abstraction
• Deployments: Declarative updates

Alternatives:
• Docker Swarm: Simpler than K8s
• Apache Mesos: Data center OS
• Nomad: Flexible scheduler`,
        keyPoints: [
          'Orchestration needed for container management at scale',
          'Kubernetes is the industry standard',
          'Automatic scaling and healing are key features',
          'Declarative configuration is powerful',
          'Simpler alternatives exist for smaller deployments'
        ]
      },
      {
        id: 'containers-in-fog',
        title: 'Containers in Fog Computing',
        content: `Containers are ideal for fog environments:

Benefits for Fog:
• Fast deployment to edge nodes
• Consistent environment across devices
• Efficient resource utilization
• Easy updates and rollbacks
• Microservices architecture support

Challenges:
• Resource constraints on edge devices
• Limited container runtime support
• Network bandwidth for image distribution
• Security in multi-tenant environments
• Managing distributed containers

Best Practices:
• Use lightweight base images
• Minimize image layers
• Optimize for ARM architecture (common in IoT)
• Implement image caching strategies
• Use container registries at the edge
• Monitor resource usage

Tools for Edge:
• K3s: Lightweight Kubernetes
• MicroK8s: Minimal K8s
• KubeEdge: Extends K8s to edge
• Docker on ARM devices`,
        keyPoints: [
          'Containers perfect for fog due to portability',
          'Resource constraints require optimization',
          'Lightweight K8s distributions available for edge',
          'Image distribution strategy is important',
          'Security considerations for edge deployments'
        ]
      }
    ]
  }
];

// Flashcards for quick study
export const flashcards = [
  // Fog Computing Basics
  { id: 1, topic: 'intro-fog', question: 'What is fog computing?', answer: 'Fog computing extends cloud computing to the edge of the network, bringing computation, storage, and networking closer to end-users and IoT devices to reduce latency and enable real-time applications.' },
  { id: 2, topic: 'intro-fog', question: 'What are the key characteristics of fog computing?', answer: 'Low latency, location awareness, distributed architecture, real-time interactions, heterogeneity, and geographically distributed deployment.' },
  { id: 3, topic: 'intro-fog', question: 'How does fog computing differ from cloud computing?', answer: 'Cloud is centralized with high computational power but higher latency. Fog is distributed with lower latency, location awareness, and better suited for real-time IoT applications.' },
  { id: 4, topic: 'intro-fog', question: 'What are the three layers in fog architecture?', answer: 'Cloud layer (centralized data centers), Fog layer (edge servers and gateways), and IoT/Edge layer (end devices and sensors).' },
  
  // Security
  { id: 5, topic: 'security', question: 'What are the main security challenges in fog computing?', answer: 'Distributed architecture with multiple attack surfaces, resource constraints on edge devices, insecure communication channels, physical security concerns, and difficulty maintaining consistent security policies.' },
  { id: 6, topic: 'security', question: 'What is the CAP theorem?', answer: 'CAP theorem states that distributed systems can only guarantee two of three properties: Consistency, Availability, and Partition tolerance. Fog systems typically choose AP or CP.' },
  { id: 7, topic: 'security', question: 'Name three authentication methods for fog computing', answer: 'Multi-factor authentication (MFA), certificate-based authentication, biometric authentication, and token-based systems.' },
  { id: 8, topic: 'security', question: 'What is differential privacy?', answer: 'A technique that adds controlled noise to data to protect individual privacy while maintaining statistical accuracy for aggregate queries.' },
  
  // Replication
  { id: 9, topic: 'replication', question: 'Why is replication important in fog computing?', answer: 'Replication provides fault tolerance, enables load balancing, reduces latency by placing data closer to users, and increases system availability.' },
  { id: 10, topic: 'replication', question: 'What is the difference between active and passive replication?', answer: 'Active replication: all replicas process requests simultaneously. Passive replication: primary replica processes requests while backups remain on standby.' },
  { id: 11, topic: 'replication', question: 'What is eventual consistency?', answer: 'A consistency model where replicas may temporarily differ but will eventually converge to the same state, offering higher availability and lower latency at the cost of temporary inconsistencies.' },
  { id: 12, topic: 'replication', question: 'What are CRDTs?', answer: 'Conflict-free Replicated Data Types are data structures designed to be replicated across multiple nodes that automatically resolve conflicts, eliminating the need for complex conflict resolution.' },
  
  // Cyberforaging
  { id: 13, topic: 'cyberforaging', question: 'What is cyberforaging?', answer: 'Cyberforaging is the practice of offloading computation from resource-constrained mobile devices to more powerful nearby servers (surrogates) to extend battery life and improve performance.' },
  { id: 14, topic: 'cyberforaging', question: 'What factors determine offloading decisions?', answer: 'Computation complexity, data size, network conditions, energy constraints, battery level, and application requirements (real-time vs batch).' },
  { id: 15, topic: 'cyberforaging', question: 'What is Mobile Edge Computing (MEC)?', answer: 'MEC places computation resources at base stations in mobile networks, providing ultra-low latency (1-10ms) for applications like AR/VR, integrated with 5G networks.' },
  { id: 16, topic: 'cyberforaging', question: 'What are cloudlets?', answer: 'Cloudlets are trusted, resource-rich computers located at the network edge that provide computing resources to nearby mobile devices, using VM-based provisioning with soft state (no permanent storage).' },
  
  // Load Balancing
  { id: 17, topic: 'load-balancing', question: 'What are the goals of load balancing?', answer: 'Maximize resource utilization, minimize response time, avoid overloading single nodes, maintain system stability, and improve fault tolerance.' },
  { id: 18, topic: 'load-balancing', question: 'What is the difference between static and dynamic load balancing?', answer: 'Static uses fixed algorithms without runtime adaptation. Dynamic adapts based on current system state, monitoring, and changing conditions.' },
  { id: 19, topic: 'load-balancing', question: 'Name three dynamic load balancing algorithms', answer: 'Least Connections (fewest active connections), Least Response Time (fastest server), Resource-based (CPU/memory availability), and Adaptive (learns from history).' },
  { id: 20, topic: 'load-balancing', question: 'What is Quality of Service (QoS)?', answer: 'QoS ensures applications meet specific requirements for latency, bandwidth, reliability, availability, and security through techniques like resource reservation and admission control.' },
  
  // Simulators
  { id: 21, topic: 'simulators', question: 'Why is simulation important for fog computing research?', answer: 'Real deployment is expensive, difficult to replicate, and hard to scale. Simulation provides cost-effective experimentation, reproducible results, and safe testing of scenarios at scale.' },
  { id: 22, topic: 'simulators', question: 'What is iFogSim?', answer: 'iFogSim is a popular fog computing simulator that extends CloudSim, models fog devices and applications, supports resource management policies, and includes energy consumption modeling.' },
  { id: 23, topic: 'simulators', question: 'What is the difference between simulation and emulation?', answer: 'Simulation models behavior mathematically using abstractions. Emulation runs actual code on virtual resources. Hybrid approaches combine both for balance of accuracy and performance.' },
  { id: 24, topic: 'simulators', question: 'What are key challenges in fog simulation?', answer: 'Balancing accuracy vs performance, scalability to many nodes, validating model accuracy against reality, capturing dynamic behavior, and modeling mobility and failures.' },
  
  // Containers
  { id: 25, topic: 'containers', question: 'How do containers differ from virtual machines?', answer: 'Containers share the host OS kernel (vs full OS per VM), use OS-level virtualization (vs hardware virtualization), are smaller (MBs vs GBs), start faster (seconds vs minutes), but have lighter isolation.' },
  { id: 26, topic: 'containers', question: 'What are the key components of Docker?', answer: 'Docker Engine (runtime), Docker Images (read-only templates), Docker Containers (running instances), Docker Registry (image repository), and Docker Compose (multi-container apps).' },
  { id: 27, topic: 'containers', question: 'What is Kubernetes?', answer: 'Kubernetes (K8s) is the de facto standard for container orchestration, providing automated deployment, scaling, self-healing, service discovery, load balancing, and configuration management.' },
  { id: 28, topic: 'containers', question: 'Why are containers good for fog computing?', answer: 'Fast deployment to edge nodes, consistent environment across devices, efficient resource utilization, easy updates/rollbacks, and support for microservices architecture.' },
  { id: 29, topic: 'containers', question: 'What is K3s?', answer: 'K3s is a lightweight Kubernetes distribution designed for resource-constrained environments like edge and IoT devices, with a smaller footprint while maintaining K8s compatibility.' },
  { id: 30, topic: 'containers', question: 'What is a Dockerfile?', answer: 'A Dockerfile is a text file containing instructions to build a Docker image, defining the base image, dependencies, configuration, and commands needed to create the container.' },
];

// Quiz questions - All 146 questions from exam PDFs
export const quizQuestions = [
  // ========== INTRODUCTION TO FOG COMPUTING (23 questions) ==========
  {
    id: 1,
    topic: 'intro-fog',
    question: 'There are 3 main aspects to consider when deciding to use Fog Computing. Which of these is NOT one of them?',
    options: [
      'Latency requirements',
      'Bandwidth consumption',
      'Security concerns',
      'Geographic distribution'
    ],
    correct: 2,
    explanation: 'The 3 main aspects are: Latency (time-sensitive applications), Bandwidth (reducing data transfer to cloud), and Geographic distribution (location-aware services). Security is important but not one of the three primary decision factors.'
  },
  {
    id: 2,
    topic: 'intro-fog',
    question: 'What does "geographically dispersed" mean in the context of fog computing?',
    options: [
      'Resources are located in different countries',
      'Computing resources are distributed across multiple physical locations',
      'Data is stored in multiple data centers',
      'Users are spread across different regions'
    ],
    correct: 1,
    explanation: 'Geographically dispersed means computing resources, services, and infrastructure are distributed across multiple physical locations, not centralized in one place.'
  },
  {
    id: 3,
    topic: 'intro-fog',
    question: 'What cloud services exist?',
    options: [
      'IaaS, PaaS, SaaS',
      'Public, Private, Hybrid',
      'Compute, Storage, Network',
      'All of the above'
    ],
    correct: 3,
    explanation: 'Cloud services include service models (IaaS, PaaS, SaaS), deployment models (Public, Private, Hybrid, Community), and resource types (Compute, Storage, Network).'
  },
  {
    id: 4,
    topic: 'intro-fog',
    question: 'What is the notion underlying IaaS / PaaS / SaaS?',
    options: [
      'Different levels of abstraction in cloud services',
      'Different pricing models',
      'Different security levels',
      'Different geographic locations'
    ],
    correct: 0,
    explanation: 'IaaS/PaaS/SaaS represent different levels of abstraction: IaaS provides infrastructure, PaaS provides platform, SaaS provides software as a service.'
  },
  {
    id: 5,
    topic: 'intro-fog',
    question: 'Which is an example of IaaS?',
    options: [
      'Gmail',
      'Google App Engine',
      'Amazon EC2',
      'Microsoft Office 365'
    ],
    correct: 2,
    explanation: 'Amazon EC2 is Infrastructure as a Service - you manage the OS and applications. Gmail and Office 365 are SaaS, Google App Engine is PaaS.'
  },
  {
    id: 6,
    topic: 'intro-fog',
    question: 'What is the notion of "cloud resource provisioning"?',
    options: [
      'Allocating and configuring cloud resources on demand',
      'Paying for cloud services',
      'Securing cloud resources',
      'Backing up cloud data'
    ],
    correct: 0,
    explanation: 'Cloud resource provisioning is the process of allocating and configuring computing resources (servers, storage, network) on demand based on user requirements.'
  },
  {
    id: 7,
    topic: 'intro-fog',
    question: 'What is the notion of "pay-as-you-go" payment scheme?',
    options: [
      'Paying upfront for services',
      'Paying only for resources actually used',
      'Paying monthly subscription fees',
      'Paying per user license'
    ],
    correct: 1,
    explanation: 'Pay-as-you-go means you only pay for the computing resources you actually consume, allowing for flexible scaling and cost optimization.'
  },
  {
    id: 8,
    topic: 'intro-fog',
    question: 'There are four types of cloud deployments. Which is NOT one of them?',
    options: [
      'Private cloud',
      'Public cloud',
      'Hybrid cloud',
      'Distributed cloud'
    ],
    correct: 3,
    explanation: 'The four types are: Private, Public, Hybrid, and Community cloud. Distributed cloud is not a standard deployment model.'
  },
  {
    id: 9,
    topic: 'intro-fog',
    question: 'What is a private cloud?',
    options: [
      'Cloud infrastructure for exclusive use by a single organization',
      'Free cloud services',
      'Cloud with no internet connection',
      'Cloud with limited features'
    ],
    correct: 0,
    explanation: 'A private cloud is cloud infrastructure operated solely for a single organization, providing more control and security.'
  },
  {
    id: 10,
    topic: 'intro-fog',
    question: 'Regarding practical use cases, what seems to be the most important reason for having fog software running?',
    options: [
      'Cost reduction',
      'Low latency and real-time processing',
      'Increased storage capacity',
      'Better user interface'
    ],
    correct: 1,
    explanation: 'The most important reason is low latency and real-time processing, enabling time-sensitive applications that cannot tolerate cloud latency.'
  },
  {
    id: 11,
    topic: 'intro-fog',
    question: 'Which are examples of fog computing use cases?',
    options: [
      'Autonomous vehicles and smart traffic management',
      'Email services and web browsing',
      'Video streaming and social media',
      'Database backups and archives'
    ],
    correct: 0,
    explanation: 'Autonomous vehicles and smart traffic management require low latency and real-time processing, making them ideal fog computing use cases.'
  },
  {
    id: 12,
    topic: 'intro-fog',
    question: 'What is the concept of Mobile Computing?',
    options: [
      'Computing on mobile devices while stationary',
      'Computing capability while on the move',
      'Cloud computing accessed via mobile devices',
      'Computing only on smartphones'
    ],
    correct: 1,
    explanation: 'Mobile Computing refers to computing capability that allows users to access information and services while on the move, not tied to a fixed location.'
  },
  {
    id: 13,
    topic: 'intro-fog',
    question: 'What is the concept of Mobile Cloud Computing?',
    options: [
      'Mobile devices with cloud storage',
      'Offloading mobile device computation to cloud',
      'Cloud services accessed from mobile devices',
      'All of the above'
    ],
    correct: 3,
    explanation: 'Mobile Cloud Computing combines mobile computing and cloud computing, involving offloading computation, cloud storage, and accessing cloud services from mobile devices.'
  },
  {
    id: 14,
    topic: 'intro-fog',
    question: 'Complete: "An ad hoc mobile network consists of nodes that:"',
    options: [
      'Are connected to fixed infrastructure',
      'Can communicate directly without fixed infrastructure',
      'Require internet connection',
      'Are all stationary'
    ],
    correct: 1,
    explanation: 'An ad hoc mobile network consists of nodes that can communicate directly with each other without requiring fixed infrastructure or base stations.'
  },
  {
    id: 15,
    topic: 'intro-fog',
    question: 'Are MANET and MACC similar concepts?',
    options: [
      'Yes, they are identical',
      'No, MANET is infrastructure-less while MACC uses cloud infrastructure',
      'Yes, both use fixed infrastructure',
      'No, MANET uses cloud while MACC is infrastructure-less'
    ],
    correct: 1,
    explanation: 'MANET (Mobile Ad-hoc Network) is infrastructure-less, while MACC (Mobile Ad-hoc Cloud Computing) combines ad-hoc networking with cloud computing infrastructure.'
  },
  {
    id: 16,
    topic: 'intro-fog',
    question: 'What is the concept of Edge Computing?',
    options: [
      'Computing at the network edge, close to data sources',
      'Computing only on edge devices',
      'Computing in the cloud',
      'Computing on mobile devices only'
    ],
    correct: 0,
    explanation: 'Edge Computing refers to processing data at the network edge, close to where data is generated, reducing latency and bandwidth usage.'
  },
  {
    id: 17,
    topic: 'intro-fog',
    question: 'What are the most relevant differences between FC (Fog Computing) and EC/MACC/MC?',
    options: [
      'FC is centralized, others are distributed',
      'FC emphasizes location awareness and supports IoT better',
      'EC has lower latency than FC',
      'There are no significant differences'
    ],
    correct: 1,
    explanation: 'Fog Computing emphasizes location awareness, supports IoT applications better, and provides a more comprehensive framework compared to Edge Computing, MACC, and Mobile Computing.'
  },
  {
    id: 18,
    topic: 'intro-fog',
    question: 'The term "edge" used by telecommunications industry usually refers to:',
    options: [
      'IoT devices themselves',
      '4G/5G base stations, RANs, and ISP access/edge networks',
      'Cloud data centers',
      'User devices only'
    ],
    correct: 1,
    explanation: 'In telecommunications, "edge" typically refers to 4G/5G base stations, Radio Access Networks (RANs), and ISP access/edge networks - the infrastructure close to users.'
  },
  {
    id: 19,
    topic: 'intro-fog',
    question: 'The edge is the immediate first hop from IoT devices (not the IoT nodes themselves), such as:',
    options: [
      'The cloud data center',
      'WiFi access points or gateways',
      'The internet backbone',
      'User smartphones'
    ],
    correct: 1,
    explanation: 'The edge is the immediate first hop infrastructure from IoT devices, such as WiFi access points or gateways, not the IoT devices themselves.'
  },
  {
    id: 20,
    topic: 'intro-fog',
    question: 'If computation is done on IoT devices themselves, this computing paradigm is referred to as:',
    options: [
      'Fog computing',
      'Edge computing',
      'Mist computing',
      'Cloud computing'
    ],
    correct: 2,
    explanation: 'When computation happens directly on IoT devices themselves, it is called "mist computing" - the lowest level of the fog-edge-mist hierarchy.'
  },
  {
    id: 21,
    topic: 'intro-fog',
    question: 'What is the notion of Cloudlet?',
    options: [
      'A small cloud data center',
      'A trusted, resource-rich computer near mobile users',
      'A mobile device with cloud capabilities',
      'A cloud service provider'
    ],
    correct: 1,
    explanation: 'A cloudlet is a trusted, resource-rich computer or cluster of computers that is well-connected to the internet and available for use by nearby mobile devices.'
  },
  {
    id: 22,
    topic: 'intro-fog',
    question: 'Could Network infrastructure owners enable cloudlets with virtualization capacity closer to mobile devices?',
    options: [
      'No, it is technically impossible',
      'Yes, they could deploy cloudlets at base stations or network edge',
      'Only in data centers',
      'Only for fixed devices'
    ],
    correct: 1,
    explanation: 'Yes, network infrastructure owners (like AT&T, Nokia) could enable cloudlets with virtualization capacity at base stations or network edge locations, bringing computation closer to mobile devices.'
  },
  {
    id: 23,
    topic: 'intro-fog',
    question: 'Regarding heterogeneity, how does Fog Computing compare to other paradigms?',
    options: [
      'FC has less heterogeneity than cloud',
      'FC supports high heterogeneity of devices and protocols',
      'FC only supports homogeneous devices',
      'Heterogeneity is not relevant to FC'
    ],
    correct: 1,
    explanation: 'Fog Computing supports high heterogeneity - diverse device types, protocols, and architectures - which is essential for IoT environments with varied devices.'
  },
  // ========== SECURITY ISSUES (12 questions) ==========
  {
    id: 24,
    topic: 'security',
    question: 'Compared with cloud computing, fog computing has five distinguished features. Which is NOT one of them?',
    options: [
      'Geographic distribution',
      'Low latency',
      'Centralized architecture',
      'Heterogeneity'
    ],
    correct: 2,
    explanation: 'The five features are: Geographic distribution, Low latency, Location awareness, Large number of nodes, and Heterogeneity. Centralized architecture is NOT a feature of fog computing.'
  },
  {
    id: 25,
    topic: 'security',
    question: 'There are several fog assisted IoT smart-city applications. Which are examples?',
    options: [
      'Smart traffic management and environmental monitoring',
      'Email services and web hosting',
      'Video streaming platforms',
      'Social media applications'
    ],
    correct: 0,
    explanation: 'Smart traffic management and environmental monitoring are examples of fog-assisted IoT smart-city applications that require low latency and location awareness.'
  },
  {
    id: 26,
    topic: 'security',
    question: 'Why is cloud computing vulnerable to be hacked by external attackers?',
    options: [
      'Cloud has weaker encryption',
      'Centralized architecture creates a single point of attack',
      'Cloud providers have poor security',
      'Cloud services are always public'
    ],
    correct: 1,
    explanation: 'Centralized architecture in cloud computing creates a single point of attack - if attackers breach the central data center, they can access all data and services.'
  },
  {
    id: 27,
    topic: 'security',
    question: 'Fog computing is considered more secure than cloud computing because:',
    options: [
      'It uses better encryption algorithms',
      'Distributed architecture reduces single point of failure',
      'It has no internet connection',
      'It uses proprietary protocols'
    ],
    correct: 1,
    explanation: 'Fog computing\'s distributed architecture reduces the single point of failure risk - even if one node is compromised, the entire system is not affected.'
  },
  {
    id: 28,
    topic: 'security',
    question: 'Fog computing inherits security risks from cloud computing. Which is NOT one of these?',
    options: [
      'Data privacy concerns',
      'Authentication and authorization challenges',
      'Network security vulnerabilities',
      'Physical device theft (for cloud)'
    ],
    correct: 3,
    explanation: 'Physical device theft is more relevant to fog/edge devices than cloud. Fog inherits data privacy, authentication, authorization, and network security risks from cloud.'
  },
  {
    id: 29,
    topic: 'security',
    question: 'An attacker may launch several attacks to disrupt fog computing. Which is NOT a common attack type?',
    options: [
      'Man-in-the-middle attacks',
      'DDoS attacks',
      'Forgery attacks',
      'Hardware failure attacks'
    ],
    correct: 3,
    explanation: 'Common attacks include man-in-the-middle, DDoS, forgery, replay attacks, and side-channel attacks. Hardware failure is not an attack but a system issue.'
  },
  {
    id: 30,
    topic: 'security',
    question: 'What is a forgery attack in fog computing?',
    options: [
      'Creating fake fog nodes',
      'Altering data to appear authentic',
      'Impersonating legitimate users or nodes',
      'All of the above'
    ],
    correct: 3,
    explanation: 'Forgery attacks involve creating fake nodes, altering data to appear authentic, or impersonating legitimate users/nodes to gain unauthorized access.'
  },
  {
    id: 31,
    topic: 'security',
    question: 'Privacy in fog computing includes 4 aspects. Which is NOT one of them?',
    options: [
      'Identity privacy',
      'Location privacy',
      'Data privacy',
      'Network privacy'
    ],
    correct: 3,
    explanation: 'The 4 privacy aspects are: Identity privacy (user identity protection), Location privacy (location information), Data privacy (sensitive data), and Query privacy (query content).'
  },
  {
    id: 32,
    topic: 'security',
    question: 'What is identity privacy?',
    options: [
      'Protecting user location information',
      'Protecting user identity from being revealed',
      'Protecting data content',
      'Protecting network topology'
    ],
    correct: 1,
    explanation: 'Identity privacy protects user identity from being revealed or linked to their activities, ensuring anonymity in fog computing systems.'
  },
  {
    id: 33,
    topic: 'security',
    question: 'Is fog computing vulnerable to sybil attacks?',
    options: [
      'No, fog computing is immune to sybil attacks',
      'Yes, attackers can create multiple fake identities',
      'Only in cloud layer',
      'Only if not using encryption'
    ],
    correct: 1,
    explanation: 'Yes, fog computing is vulnerable to sybil attacks where an attacker creates multiple fake identities or nodes to gain disproportionate influence in the network.'
  },
  {
    id: 34,
    topic: 'security',
    question: 'In different applications, data from the same event has distinct security levels for different users. Example:',
    options: [
      'All users see the same data',
      'Emergency responders see real-time location, public sees aggregated data',
      'Data security is always the same',
      'Only administrators see data'
    ],
    correct: 1,
    explanation: 'Example: In smart city applications, emergency responders may need real-time precise location data, while the public may only see aggregated, anonymized statistics.'
  },
  {
    id: 35,
    topic: 'security',
    question: 'According to the CAP theorem, which two properties do fog systems typically prioritize?',
    options: [
      'Consistency and Availability',
      'Availability and Partition tolerance',
      'Consistency and Partition tolerance',
      'All three equally'
    ],
    correct: 1,
    explanation: 'Fog systems often choose AP (Availability and Partition tolerance) to ensure the system remains available even during network partitions, accepting eventual consistency.'
  },
  // ========== REPLICATION (18 questions) ==========
  {
    id: 36,
    topic: 'replication',
    question: 'The replication model differs from device-side caching in key ways. Which is NOT a difference?',
    options: [
      'Replication maintains consistency across devices',
      'Replication allows updates from multiple devices',
      'Caching is read-only, replication supports writes',
      'Replication requires less storage than caching'
    ],
    correct: 3,
    explanation: 'Replication actually requires MORE storage than caching since it maintains full copies. The key differences are consistency maintenance, multi-device updates, and write support.'
  },
  {
    id: 37,
    topic: 'replication',
    question: 'Which are examples of applications that illustrate the use of replication?',
    options: [
      'Email clients and calendar applications',
      'Static websites',
      'Read-only databases',
      'Single-user applications'
    ],
    correct: 0,
    explanation: 'Email clients and calendar applications are classic examples where replication allows multiple devices to access and update the same data while maintaining consistency.'
  },
  {
    id: 38,
    topic: 'replication',
    question: 'Compare "Remote Data Access" and "Master Replication". Which statement is correct?',
    options: [
      'Both support offline access',
      'Remote access requires network, master replication allows local copies',
      'Both have the same latency',
      'Remote access is faster for updates'
    ],
    correct: 1,
    explanation: 'Remote Data Access requires network connection for all operations. Master Replication maintains local copies, allowing offline access and faster local reads.'
  },
  {
    id: 39,
    topic: 'replication',
    question: 'In a master replication model, what component is responsible for detecting conflicting updates?',
    options: [
      'The master server only',
      'Each replica independently',
      'A conflict detection service',
      'The client application'
    ],
    correct: 0,
    explanation: 'In master replication, the master server is responsible for detecting when two devices produce conflicting updates. Not all conflicts can be solved automatically - some require manual resolution.'
  },
  {
    id: 40,
    topic: 'replication',
    question: 'In a replicated system, what is consistency?',
    options: [
      'All replicas have identical data at all times',
      'All replicas will eventually have the same data',
      'The property that all replicas show the same view of data',
      'All of the above (depending on consistency model)'
    ],
    correct: 3,
    explanation: 'Consistency depends on the model: strong consistency means identical data at all times, eventual consistency means eventually same data, and session consistency means same view within a session.'
  },
  {
    id: 41,
    topic: 'replication',
    question: 'What is "eventual consistency"?',
    options: [
      'Consistency that may never be achieved',
      'All replicas will eventually converge to the same state',
      'Consistency only during business hours',
      'Consistency that requires manual intervention'
    ],
    correct: 1,
    explanation: 'Eventual consistency guarantees that if no new updates are made, all replicas will eventually converge to the same state, though temporary inconsistencies are allowed.'
  },
  {
    id: 42,
    topic: 'replication',
    question: 'As introduced by Bayou, what is a session?',
    options: [
      'A network connection',
      'A sequence of operations by a single user',
      'An atomic transaction',
      'A time period'
    ],
    correct: 1,
    explanation: 'A session in Bayou is a sequence of read and write operations performed by a single user. A session does NOT correspond to an atomic transaction - operations within a session may not be atomic.'
  },
  {
    id: 43,
    topic: 'replication',
    question: 'Consider the session guarantee "Monotonic Writes". When is the session state updated and checked?',
    options: [
      'Updated on writes, checked on reads',
      'Updated on reads, checked on writes',
      'Updated and checked only on writes',
      'Updated and checked only on reads'
    ],
    correct: 0,
    explanation: 'For Monotonic Writes, the session state is updated when a write operation completes, and checked before subsequent writes to ensure ordering guarantees.'
  },
  {
    id: 44,
    topic: 'replication',
    question: 'Consider "best effort consistency". In which situation will replicas NOT converge even with reliable delivery?',
    options: [
      'Network partitions',
      'Conflicting concurrent updates',
      'Clock synchronization issues',
      'All of the above'
    ],
    correct: 3,
    explanation: 'Even with reliable delivery, replicas may not converge due to: network partitions, conflicting concurrent updates, clock synchronization issues, and message ordering problems.'
  },
  {
    id: 45,
    topic: 'replication',
    question: 'For a tire sales system with multiple vendors updating inventory, which session guarantee ensures each seller knows exact units?',
    options: [
      'Read Your Writes',
      'Monotonic Reads',
      'Monotonic Writes',
      'Writes Follow Reads'
    ],
    correct: 2,
    explanation: 'Monotonic Writes ensures that writes from a session are applied in order, so each seller sees their own updates in sequence, knowing the exact current value.'
  },
  {
    id: 46,
    topic: 'replication',
    question: 'Do eventually consistent systems make NO guarantees about data freshness?',
    options: [
      'Yes, no guarantees whatsoever',
      'No, they guarantee eventual convergence',
      'They guarantee immediate freshness',
      'They guarantee freshness within 1 second'
    ],
    correct: 1,
    explanation: 'Eventually consistent systems DO guarantee that data will eventually be fresh (converge), but make no guarantees about WHEN this will happen or the freshness at any specific read.'
  },
  {
    id: 47,
    topic: 'replication',
    question: 'Does "Read Your Writes" guarantee that writes are ordered after reads in every copy?',
    options: [
      'Yes, in every copy',
      'No, only in the copy where reads occurred',
      'Only for the session user',
      'Only if using strong consistency'
    ],
    correct: 2,
    explanation: '"Read Your Writes" guarantees that writes made during the session are ordered after any writes whose effects were seen by previous reads in THAT SESSION, not necessarily in every copy.'
  },
  {
    id: 48,
    topic: 'replication',
    question: 'For a file editing system where version N+1 must replace version N, what session guarantee is needed?',
    options: [
      'Read Your Writes',
      'Monotonic Writes',
      'Writes Follow Reads',
      'Monotonic Reads'
    ],
    correct: 1,
    explanation: 'Monotonic Writes ensures that writes from a session are applied in order, preventing version N from being applied after version N+1.'
  },
  {
    id: 49,
    topic: 'replication',
    question: 'Regarding staging technique for network disconnection, how much does it depend on working set correctness?',
    options: [
      'Not at all',
      'Completely - staging fails if working set is incorrect',
      'Partially - some files can be accessed',
      'Only for write operations'
    ],
    correct: 1,
    explanation: 'Staging heavily depends on the correctness of the working set. If a file is not staged, the system must fetch it from the server, which may fail if offline.'
  },
  {
    id: 50,
    topic: 'replication',
    question: 'Does the session guarantee "Read Your Writes" affect users outside the session?',
    options: [
      'Yes, it affects all users',
      'No, it only affects the session user',
      'Only affects users on the same replica',
      'Only affects administrators'
    ],
    correct: 1,
    explanation: 'Session guarantees only affect the user within that specific session. They do not provide guarantees for other users or sessions.'
  },
  {
    id: 51,
    topic: 'replication',
    question: 'For a calendar application where meetings appear/disappear, what is the weakest session guarantee needed?',
    options: [
      'Read Your Writes',
      'Monotonic Reads',
      'Writes Follow Reads',
      'Monotonic Writes'
    ],
    correct: 1,
    explanation: 'Monotonic Reads ensures that once a read sees a write, subsequent reads will also see that write (or later writes), preventing meetings from appearing and disappearing.'
  },
  {
    id: 52,
    topic: 'replication',
    question: 'What are the four session guarantees from Bayou?',
    options: [
      'Read Your Writes, Write Your Reads, Monotonic Reads, Monotonic Writes',
      'Read Your Writes, Monotonic Reads, Monotonic Writes, Writes Follow Reads',
      'Consistency, Availability, Partition tolerance, Latency',
      'Strong, Weak, Eventual, Causal'
    ],
    correct: 1,
    explanation: 'The four Bayou session guarantees are: Read Your Writes, Monotonic Reads, Monotonic Writes, and Writes Follow Reads.'
  },
  {
    id: 53,
    topic: 'replication',
    question: 'What is "causal consistency"?',
    options: [
      'Consistency based on cause and effect relationships',
      'Consistency that preserves causal ordering of events',
      'Consistency that happens by chance',
      'Consistency only for causal data'
    ],
    correct: 1,
    explanation: 'Causal consistency preserves the causal ordering of events - if event A causally affects event B, all replicas will see A before B.'
  },
  // ========== CYBERFORAGING (8 questions) ==========
  {
    id: 54,
    topic: 'cyberforaging',
    question: 'What is cyber-foraging?',
    options: [
      'Searching for cyber threats',
      'Mobile devices leveraging nearby computing resources',
      'Cloud computing for mobile devices',
      'Network security scanning'
    ],
    correct: 1,
    explanation: 'Cyber-foraging is the process by which mobile devices leverage nearby computing resources (surrogates) to extend their capabilities, such as offloading computation.'
  },
  {
    id: 55,
    topic: 'cyberforaging',
    question: 'What are the concepts behind thin-client and thick-client?',
    options: [
      'Thin-client: minimal processing, thick-client: full processing',
      'Thin-client: full processing, thick-client: minimal processing',
      'Both are the same',
      'Thin-client: cloud-based, thick-client: local'
    ],
    correct: 0,
    explanation: 'Thin-client performs minimal processing locally and relies on remote servers. Thick-client performs most processing locally with minimal server dependency.'
  },
  {
    id: 56,
    topic: 'cyberforaging',
    question: 'What are the potential benefits of cyber-foraging?',
    options: [
      'Reduced energy consumption, faster computation, extended device capabilities',
      'Increased storage only',
      'Better screen quality',
      'Lower device cost'
    ],
    correct: 0,
    explanation: 'Cyber-foraging benefits include: reduced energy consumption (extends battery), faster computation (powerful surrogates), and enables complex applications on simple devices.'
  },
  {
    id: 57,
    topic: 'cyberforaging',
    question: 'In cyber-foraging, what is "fidelity"?',
    options: [
      'Network reliability',
      'The quality/accuracy of service provided by surrogates',
      'Data encryption strength',
      'User authentication method'
    ],
    correct: 1,
    explanation: 'Fidelity refers to the quality or accuracy of the service provided by surrogates. Higher fidelity means better quality but may require more resources.'
  },
  {
    id: 58,
    topic: 'cyberforaging',
    question: 'In cyber-foraging, which tasks are best suited for offloading?',
    options: [
      'All tasks',
      'Computation-intensive tasks with small data transfer',
      'Tasks requiring large data transfer',
      'User interface tasks'
    ],
    correct: 1,
    explanation: 'Computation-intensive tasks with small data transfer are best suited - the computation benefit outweighs the communication cost.'
  },
  {
    id: 59,
    topic: 'cyberforaging',
    question: 'Regarding cyber-foraging, where can surrogates be located?',
    options: [
      'Only in data centers',
      'Only on mobile devices',
      'At network edge, base stations, or nearby servers',
      'Only in the cloud'
    ],
    correct: 2,
    explanation: 'Surrogates can be located at the network edge, base stations, nearby servers (cloudlets), or other edge infrastructure close to mobile devices.'
  },
  {
    id: 60,
    topic: 'cyberforaging',
    question: 'What is the concept of "data staging"?',
    options: [
      'Pre-loading data to edge servers before it is needed',
      'Staging area for data processing',
      'Data backup process',
      'Data encryption staging'
    ],
    correct: 0,
    explanation: 'Data staging involves pre-loading or caching data at edge servers (surrogates) before it is needed, reducing latency when the data is actually requested.'
  },
  {
    id: 61,
    topic: 'cyberforaging',
    question: 'What is "soft state" in the context of cloudlets?',
    options: [
      'Unreliable state',
      'Temporary state with no permanent storage',
      'Partially synchronized state',
      'Encrypted state'
    ],
    correct: 1,
    explanation: 'Soft state means cloudlets don\'t maintain permanent storage; data is temporary and can be recreated, allowing for flexible resource usage.'
  },
  // ========== LOAD BALANCING (33 questions) ==========
  {
    id: 62,
    topic: 'load-balancing',
    question: 'Are traffic patterns in data center networks different from traditional Internet?',
    options: [
      'No, they are identical',
      'Yes, data centers have different traffic characteristics',
      'Only for small data centers',
      'Only during peak hours'
    ],
    correct: 1,
    explanation: 'Yes, data center traffic patterns are quite different - they have more east-west traffic (server-to-server), shorter flows, and different latency requirements compared to traditional Internet.'
  },
  {
    id: 63,
    topic: 'load-balancing',
    question: 'What is the flow arrival pattern of requests in a data-center?',
    options: [
      'Uniform and predictable',
      'Bursty and unpredictable',
      'Constant rate',
      'Only during business hours'
    ],
    correct: 1,
    explanation: 'Flow arrivals in data centers are typically bursty and unpredictable, with many short flows and fewer long flows, creating challenges for load balancing.'
  },
  {
    id: 64,
    topic: 'load-balancing',
    question: 'Are most flows in cloud data centers short in size?',
    options: [
      'No, most are long',
      'Yes, most flows are short (mice flows)',
      'Equal distribution',
      'Depends on the application'
    ],
    correct: 1,
    explanation: 'Yes, most flows in cloud data centers are short (mice flows) - typically KBs to MBs, with only a small percentage being long (elephant) flows.'
  },
  {
    id: 65,
    topic: 'load-balancing',
    question: 'Are traditional load balancing algorithms well suited for data center networks?',
    options: [
      'Yes, they work perfectly',
      'No, due to special topology and traffic characteristics',
      'Only for small data centers',
      'Only for specific applications'
    ],
    correct: 1,
    explanation: 'No, traditional algorithms are not well suited because data centers have special topologies (fat-tree, etc.) and traffic patterns (bursty, many short flows) that differ from traditional networks.'
  },
  {
    id: 66,
    topic: 'load-balancing',
    question: 'Why are traditional load balancing algorithms not well suited for data centers?',
    options: [
      'They are too complex',
      'Special topology (multi-rooted trees) and traffic (bursty, many short flows)',
      'They are too expensive',
      'They require too much memory'
    ],
    correct: 1,
    explanation: 'Data centers have multi-rooted tree topologies and bursty traffic with many short flows, which traditional algorithms (designed for Internet) don\'t handle well.'
  },
  {
    id: 67,
    topic: 'load-balancing',
    question: 'Is ECMP (Equal Cost Multi-Path) well adapted to data-center networks?',
    options: [
      'Yes, it works perfectly',
      'No, it causes flow collisions and poor load distribution',
      'Only for small networks',
      'Only with specific switches'
    ],
    correct: 1,
    explanation: 'No, ECMP uses hash-based routing which can cause flow collisions (multiple flows hash to same path), leading to poor load distribution in data center environments.'
  },
  {
    id: 68,
    topic: 'load-balancing',
    question: 'What challenges do load balancing mechanisms face in data center networks?',
    options: [
      'Only topology',
      'Topology, traffic patterns, and scalability',
      'Only traffic patterns',
      'Only cost'
    ],
    correct: 1,
    explanation: 'Challenges include: special topology (multi-rooted trees), traffic characteristics (bursty, many short flows), scalability to large numbers of servers, and energy efficiency.'
  },
  {
    id: 69,
    topic: 'load-balancing',
    question: 'What are the main objectives of a load balancing mechanism?',
    options: [
      'Only minimize latency',
      'Minimize latency, maximize throughput, ensure fairness, balance load',
      'Only maximize throughput',
      'Only ensure fairness'
    ],
    correct: 1,
    explanation: 'Main objectives are: minimize packet delay/latency, maximize network throughput, ensure fairness among flows, and balance load across paths and servers.'
  },
  {
    id: 70,
    topic: 'load-balancing',
    question: 'Architectures can be classified into categories. Which is NOT a category?',
    options: [
      'Switch-centric',
      'Server-centric',
      'Hybrid',
      'Cloud-centric'
    ],
    correct: 3,
    explanation: 'Architectures are classified as: Switch-centric (switches handle routing), Server-centric (servers handle routing), and Hybrid (combination). Cloud-centric is not a standard category.'
  },
  {
    id: 71,
    topic: 'load-balancing',
    question: 'Describe a Fat-Tree architecture:',
    options: [
      'A tree with fat trunks',
      'A multi-rooted tree with k pods, each containing k/2 edge and k/2 aggregation switches',
      'A single root tree',
      'A mesh network'
    ],
    correct: 1,
    explanation: 'Fat-Tree is a multi-rooted tree with k pods. Each pod contains k/2 edge switches (connect to servers) and k/2 aggregation switches (connect edge to core).'
  },
  {
    id: 72,
    topic: 'load-balancing',
    question: 'How many pods are there in a k-ary fat-tree?',
    options: [
      'k pods',
      'k/2 pods',
      'k^2 pods',
      '2k pods'
    ],
    correct: 0,
    explanation: 'A k-ary fat-tree has k pods. Each switch has k ports. The tree is organized with edge switches at the bottom, aggregation in the middle, and core switches at the top.'
  },
  {
    id: 73,
    topic: 'load-balancing',
    question: 'What is the biggest advantage and disadvantage of a fat-tree?',
    options: [
      'Advantage: low cost, Disadvantage: poor performance',
      'Advantage: provides full bisection bandwidth, Disadvantage: requires many switches',
      'Advantage: simple, Disadvantage: limited scalability',
      'Advantage: energy efficient, Disadvantage: high latency'
    ],
    correct: 1,
    explanation: 'Biggest advantage: provides full bisection bandwidth (no oversubscription). Biggest disadvantage: requires many switches (k^3/4 core switches for k-ary tree).'
  },
  {
    id: 74,
    topic: 'load-balancing',
    question: 'Is VL2 a Clos-based switch-centric architecture?',
    options: [
      'No, it is server-centric',
      'Yes, it is a Clos-based switch-centric architecture',
      'It is hybrid',
      'It is not Clos-based'
    ],
    correct: 1,
    explanation: 'Yes, VL2 is a Clos-based switch-centric architecture. It is divided into three layers: access (ToR switches), aggregation, and intermediate layers.'
  },
  {
    id: 75,
    topic: 'load-balancing',
    question: 'What is the main advantage of VL2?',
    options: [
      'Low cost',
      'Uniform high capacity between any two servers',
      'Simple management',
      'Energy efficiency'
    ],
    correct: 1,
    explanation: 'VL2\'s main advantage is providing uniform high capacity between any two servers, making the network appear as a single large switch.'
  },
  {
    id: 76,
    topic: 'load-balancing',
    question: 'Consider CamCube architecture. What category is this?',
    options: [
      'Switch-centric',
      'Server-centric',
      'Hybrid',
      'Cloud-centric'
    ],
    correct: 1,
    explanation: 'CamCube is a server-centric architecture where servers are organized in a 3D torus topology and servers themselves handle routing, not switches.'
  },
  {
    id: 77,
    topic: 'load-balancing',
    question: 'Does CamCube architecture reduce the cost of switches and routers?',
    options: [
      'No, it increases cost',
      'Yes, by eliminating expensive switches and using commodity switches',
      'It has no effect on cost',
      'Only for small deployments'
    ],
    correct: 1,
    explanation: 'Yes, CamCube reduces cost by eliminating expensive core switches and routers, using only commodity ToR (Top of Rack) switches.'
  },
  {
    id: 78,
    topic: 'load-balancing',
    question: 'With respect to energy efficiency, how do you characterize CamCube?',
    options: [
      'Very energy efficient',
      'Moderately energy efficient',
      'Not energy efficient',
      'Energy efficiency is not relevant'
    ],
    correct: 0,
    explanation: 'CamCube is very energy efficient because it eliminates power-hungry core switches and routers, using only low-power commodity switches.'
  },
  {
    id: 79,
    topic: 'load-balancing',
    question: 'What is the main disadvantage of CamCube architecture?',
    options: [
      'High cost',
      'Complex routing algorithms and limited scalability',
      'Poor performance',
      'High latency'
    ],
    correct: 1,
    explanation: 'Main disadvantages are: complex routing algorithms (servers must handle routing), and limited scalability due to the 3D torus topology constraints.'
  },
  {
    id: 80,
    topic: 'load-balancing',
    question: 'Describe the BCube architecture:',
    options: [
      'A tree structure',
      'A server-centric architecture with servers in a recursive structure',
      'A switch-centric architecture',
      'A mesh network'
    ],
    correct: 1,
    explanation: 'BCube is a server-centric architecture where servers are organized in a recursive structure. Each server has multiple network interfaces connected to different levels of mini-switches.'
  },
  {
    id: 81,
    topic: 'load-balancing',
    question: 'What is the most relevant disadvantage of BCube?',
    options: [
      'High cost',
      'Requires servers with multiple network interfaces',
      'Poor performance',
      'Complex management'
    ],
    correct: 1,
    explanation: 'BCube requires each server to have multiple network interfaces (one per level), which increases hardware cost and complexity compared to single-interface designs.'
  },
  {
    id: 82,
    topic: 'load-balancing',
    question: 'What is the category of DCell?',
    options: [
      'Switch-centric',
      'Server-centric',
      'Hybrid',
      'Cloud-centric'
    ],
    correct: 1,
    explanation: 'DCell is a server-centric architecture where servers are organized in a recursive cell structure, with servers handling routing.'
  },
  {
    id: 83,
    topic: 'load-balancing',
    question: 'What is the main advantage and disadvantage of DCell architecture?',
    options: [
      'Advantage: low cost, Disadvantage: poor scalability',
      'Advantage: high scalability with few switches, Disadvantage: complex routing',
      'Advantage: simple, Disadvantage: limited capacity',
      'Advantage: energy efficient, Disadvantage: high latency'
    ],
    correct: 1,
    explanation: 'Main advantage: high scalability with few switches (can scale to millions of servers). Main disadvantage: complex routing algorithms due to recursive structure.'
  },
  {
    id: 84,
    topic: 'load-balancing',
    question: 'Which are systematic measurement studies of data center usage?',
    options: [
      'Google, Microsoft, and Facebook studies',
      'Only academic studies',
      'Only vendor studies',
      'No such studies exist'
    ],
    correct: 0,
    explanation: 'Major studies include: Google\'s study of their data centers, Microsoft\'s study of their data center traffic, and Facebook\'s analysis of their infrastructure.'
  },
  {
    id: 85,
    topic: 'load-balancing',
    question: 'There are three major directions to minimize energy spending in data centers. Which is NOT one?',
    options: [
      'Improve hardware efficiency',
      'Optimize workload placement',
      'Use renewable energy',
      'Reduce cooling costs'
    ],
    correct: 2,
    explanation: 'The three major directions are: improve hardware efficiency (more efficient servers), optimize workload placement (consolidation), and improve cooling efficiency. Renewable energy is a separate consideration.'
  },
  {
    id: 86,
    topic: 'load-balancing',
    question: 'Which are the three major energy consumers in data centers?',
    options: [
      'Servers, network, storage',
      'Servers, cooling, power distribution',
      'Network, storage, cooling',
      'Servers, network, cooling'
    ],
    correct: 1,
    explanation: 'The three major consumers are: Servers (compute), Cooling systems (air conditioning), and Power distribution (UPS, transformers, etc.).'
  },
  {
    id: 87,
    topic: 'load-balancing',
    question: 'Can load balancing redirect flows considering energy-efficient targets?',
    options: [
      'No, load balancing only reduces delay',
      'Yes, it can balance traffic and consider energy efficiency',
      'Only for specific algorithms',
      'Only in small networks'
    ],
    correct: 1,
    explanation: 'Yes, load balancing can aim to reduce packet delay AND redirect flows by considering energy-efficient targets, such as consolidating traffic to fewer active links/switches.'
  },
  {
    id: 88,
    topic: 'load-balancing',
    question: 'Load balancing mechanisms can balance traffic across links. This is called:',
    options: [
      'Server load balancing',
      'Link load balancing',
      'Path load balancing',
      'Flow load balancing'
    ],
    correct: 1,
    explanation: 'When load balancing balances traffic across links (rather than servers), it is called "link load balancing".'
  },
  {
    id: 89,
    topic: 'load-balancing',
    question: 'How different is link load balancing from server load balancing?',
    options: [
      'They are the same',
      'Link balancing distributes traffic across network links, server balancing distributes requests across servers',
      'Link balancing is easier',
      'Server balancing is always better'
    ],
    correct: 1,
    explanation: 'Link load balancing distributes traffic flows across multiple network paths/links. Server load balancing distributes requests across multiple servers. They address different levels of the system.'
  },
  {
    id: 90,
    topic: 'load-balancing',
    question: 'Why do load balancing algorithms generally propose new heuristic algorithms?',
    options: [
      'Because exact solutions are too simple',
      'Because the problem is NP-hard, requiring heuristics for practical solutions',
      'Because heuristics are always better',
      'Because exact solutions don\'t exist'
    ],
    correct: 1,
    explanation: 'The load balancing problem is NP-hard (computationally intractable for exact solutions at scale), so heuristic algorithms are needed to find good solutions in reasonable time.'
  },
  {
    id: 91,
    topic: 'load-balancing',
    question: 'What are the four primary objectives of a balancing algorithm?',
    options: [
      'Minimize delay, maximize throughput, ensure fairness, balance load',
      'Minimize cost, maximize profit, ensure security, balance resources',
      'Minimize energy, maximize speed, ensure reliability, balance power',
      'Minimize latency, maximize bandwidth, ensure quality, balance traffic'
    ],
    correct: 0,
    explanation: 'The four primary objectives are: minimize packet delay, maximize network throughput, ensure fairness among flows, and balance load across available paths.'
  },
  {
    id: 92,
    topic: 'load-balancing',
    question: 'There are mainly two alternatives to reduce energy consumption in data centers. Which are these?',
    options: [
      'Use renewable energy and improve efficiency',
      'Turn off unused equipment and consolidate workloads',
      'Reduce cooling and use better hardware',
      'Virtualization and cloud migration'
    ],
    correct: 1,
    explanation: 'The two main alternatives are: 1) Turn off unused equipment (links, switches, servers), and 2) Consolidate workloads to fewer active resources.'
  },
  {
    id: 93,
    topic: 'load-balancing',
    question: 'When compared to data center networks, WANs have different properties. Which are these?',
    options: [
      'WANs have higher bandwidth and lower latency',
      'WANs have lower bandwidth, higher latency, and different routing',
      'WANs are identical to data centers',
      'WANs only differ in size'
    ],
    correct: 1,
    explanation: 'WANs (Wide Area Networks) have: lower bandwidth, higher latency, different routing protocols (BGP), and different failure characteristics compared to data center networks.'
  },
  {
    id: 94,
    topic: 'load-balancing',
    question: 'Which load balancing algorithm is location-aware and particularly suitable for fog computing?',
    options: [
      'Round Robin',
      'Random',
      'Geographical proximity-based',
      'Hash-based'
    ],
    correct: 2,
    explanation: 'Location-aware or geographical proximity-based algorithms are particularly important in fog computing to minimize latency by routing to nearby nodes.'
  },
  // ========== FOG SIMULATORS (29 questions) ==========
  {
    id: 95,
    topic: 'simulators',
    question: 'What characteristics does the Fog paradigm have to guarantee?',
    options: [
      'Only low latency',
      'Low latency, location awareness, scalability, heterogeneity',
      'Only scalability',
      'Only heterogeneity'
    ],
    correct: 1,
    explanation: 'Fog paradigm must guarantee: low latency, location awareness, scalability to many nodes, heterogeneity of devices, and real-time processing capabilities.'
  },
  {
    id: 96,
    topic: 'simulators',
    question: 'Why is it needed to have Fog simulators?',
    options: [
      'Real deployment is expensive and hard to replicate',
      'Simulation is always more accurate',
      'Real deployment is impossible',
      'Simulators are cheaper to develop'
    ],
    correct: 0,
    explanation: 'Fog simulators are needed because real deployment is expensive, difficult to replicate experimental conditions, hard to scale, and risky for testing new approaches.'
  },
  {
    id: 97,
    topic: 'simulators',
    question: 'What is the difference between a simulator and an emulator?',
    options: [
      'They are the same',
      'Simulator models behavior mathematically, emulator runs actual code',
      'Simulator is faster, emulator is slower',
      'Simulator is for software, emulator is for hardware'
    ],
    correct: 1,
    explanation: 'Simulator uses mathematical models and abstractions to model behavior. Emulator runs actual code on virtual resources, providing higher accuracy but lower performance.'
  },
  {
    id: 98,
    topic: 'simulators',
    question: 'Which two Fog simulators addressed in the course derive from CloudSim?',
    options: [
      'iFogSim and EdgeCloudSim',
      'YAFS and EmuFog',
      'FogTorchπ and EdgeCloudSim',
      'iFogSim and YAFS'
    ],
    correct: 0,
    explanation: 'iFogSim and EdgeCloudSim are two fog simulators that derive from CloudSim, extending it for fog/edge computing scenarios.'
  },
  {
    id: 99,
    topic: 'simulators',
    question: 'Is iFogSim based on Java?',
    options: [
      'No, it is based on Python',
      'Yes, iFogSim is Java-based',
      'It is based on C++',
      'It uses multiple languages'
    ],
    correct: 1,
    explanation: 'Yes, iFogSim is based on Java, extending CloudSim which is also Java-based.'
  },
  {
    id: 100,
    topic: 'simulators',
    question: 'When using iFogSim, is it possible to define topologies using a GUI?',
    options: [
      'Yes, iFogSim has a built-in GUI',
      'No, topologies must be defined programmatically',
      'Only for simple topologies',
      'Only in newer versions'
    ],
    correct: 1,
    explanation: 'No, iFogSim does not provide a GUI for topology definition. Topologies must be defined programmatically in Java code.'
  },
  {
    id: 101,
    topic: 'simulators',
    question: 'Is there mobility support in iFogSim?',
    options: [
      'Yes, full mobility support',
      'No, iFogSim does not support mobility',
      'Only for specific device types',
      'Only in experimental versions'
    ],
    correct: 1,
    explanation: 'No, iFogSim does not have native mobility support. It assumes static topologies.'
  },
  {
    id: 102,
    topic: 'simulators',
    question: 'Does iFogSim restrict the topology to be a hierarchical tree topology?',
    options: [
      'No, it supports arbitrary topologies',
      'Yes, it only supports hierarchical tree topologies',
      'Only for small networks',
      'Only for specific scenarios'
    ],
    correct: 1,
    explanation: 'Yes, iFogSim restricts topologies to hierarchical tree structures, with parent-child relationships between fog devices.'
  },
  {
    id: 103,
    topic: 'simulators',
    question: 'In iFogSim, is communication only possible between a parent-child pair?',
    options: [
      'No, any devices can communicate',
      'Yes, communication is restricted to parent-child pairs',
      'Only for data transmission',
      'Only for control messages'
    ],
    correct: 1,
    explanation: 'Yes, in iFogSim\'s hierarchical tree topology, communication is only possible between parent-child pairs, not between siblings or arbitrary nodes.'
  },
  {
    id: 104,
    topic: 'simulators',
    question: 'What are the main services offered by the iFogSim architecture?',
    options: [
      'Only simulation',
      'Application placement, resource management, and energy modeling',
      'Only network modeling',
      'Only device modeling'
    ],
    correct: 1,
    explanation: 'iFogSim offers: application placement services (where to deploy modules), resource management (CPU, memory, bandwidth), and energy consumption modeling.'
  },
  {
    id: 105,
    topic: 'simulators',
    question: 'Is CloudSimSDN derived from CloudSim?',
    options: [
      'No, it is independent',
      'Yes, CloudSimSDN extends CloudSim',
      'It extends iFogSim',
      'It is based on YAFS'
    ],
    correct: 1,
    explanation: 'Yes, CloudSimSDN is derived from CloudSim, adding Software-Defined Networking (SDN) capabilities to the simulation framework.'
  },
  {
    id: 106,
    topic: 'simulators',
    question: 'Is there mobility support in CloudSimSDN? Is it based on Discrete Event Simulation?',
    options: [
      'Yes to both',
      'No mobility, Yes to DES',
      'Yes mobility, No to DES',
      'No to both'
    ],
    correct: 1,
    explanation: 'CloudSimSDN does not have native mobility support, but it is based on Discrete Event Simulation (DES) like CloudSim.'
  },
  {
    id: 107,
    topic: 'simulators',
    question: 'The layers of CloudSimSDN start from Cloud Resources (bottom) to Workload (top). What are the other layers?',
    options: [
      'Network, Application, Service',
      'Network, SDN Control, Application',
      'Storage, Network, Application',
      'Virtualization, Network, Application'
    ],
    correct: 1,
    explanation: 'CloudSimSDN layers (bottom to top): Cloud Resources, Network, SDN Control, Application, Workload.'
  },
  {
    id: 108,
    topic: 'simulators',
    question: 'Is CloudSimSDN infrastructure-oriented?',
    options: [
      'No, it is application-oriented',
      'Yes, it focuses on infrastructure modeling',
      'It is balanced',
      'It depends on configuration'
    ],
    correct: 1,
    explanation: 'Yes, CloudSimSDN is infrastructure-oriented, focusing on modeling network infrastructure, SDN controllers, and network resources.'
  },
  {
    id: 109,
    topic: 'simulators',
    question: 'Consider YAFS. The architecture is defined by six classes. Which are these?',
    options: [
      'Node, Link, Application, Placement, Allocation, Results',
      'Device, Network, Task, Scheduler, Monitor, Logger',
      'Fog, Cloud, Edge, Router, Switch, Server',
      'Topology, Application, Placement, Allocation, Results, Simulator'
    ],
    correct: 0,
    explanation: 'YAFS architecture uses six main classes: Node (devices), Link (connections), Application (workload), Placement (where apps run), Allocation (resource allocation), and Results (output).'
  },
  {
    id: 110,
    topic: 'simulators',
    question: 'Is EmuFog an emulation framework that allows simulation of Docker-based applications?',
    options: [
      'Yes, exactly',
      'No, it is a simulator, not emulator',
      'It simulates but not Docker-based',
      'It emulates but uses VMs, not Docker'
    ],
    correct: 0,
    explanation: 'Yes, EmuFog is an emulation framework (not simulation) for Fog environments that allows emulation of Docker-based applications, running actual code.'
  },
  {
    id: 111,
    topic: 'simulators',
    question: 'The EmuFog architecture is divided into three domains. What are these?',
    options: [
      'Cloud, Fog, Edge',
      'Infrastructure, Application, Network',
      'Physical, Virtual, Application',
      'Compute, Storage, Network'
    ],
    correct: 0,
    explanation: 'EmuFog architecture is divided into three domains: Cloud domain (data centers), Fog domain (edge servers), and Edge domain (IoT devices).'
  },
  {
    id: 112,
    topic: 'simulators',
    question: 'Consider FogTorchπ. What are the two metrics according to which results are aggregated?',
    options: [
      'Latency and bandwidth',
      'Cost and latency',
      'Energy and performance',
      'Availability and reliability'
    ],
    correct: 1,
    explanation: 'FogTorchπ aggregates results according to two metrics: Cost (monetary cost of deployment) and Latency (end-to-end latency for applications).'
  },
  {
    id: 113,
    topic: 'simulators',
    question: 'Is FogTorchπ abstract enough to allow arbitrary topologies?',
    options: [
      'No, it only supports trees',
      'Yes, it supports arbitrary topologies',
      'Only for small networks',
      'Only specific topologies'
    ],
    correct: 1,
    explanation: 'Yes, FogTorchπ is abstract enough to allow definition of arbitrary topologies, not restricted to hierarchical structures.'
  },
  {
    id: 114,
    topic: 'simulators',
    question: 'Is scalability supported in FogTorchπ?',
    options: [
      'No, it only supports small networks',
      'Yes, it supports scalable simulations',
      'Only for specific scenarios',
      'Only with limitations'
    ],
    correct: 1,
    explanation: 'Yes, FogTorchπ supports scalability and can simulate large-scale fog environments.'
  },
  {
    id: 115,
    topic: 'simulators',
    question: 'Consider EdgeCloudSim. Does it allow arbitrary topologies? Can network link delays vary during simulation?',
    options: [
      'Yes to both',
      'No to both',
      'Yes to topology, No to varying delays',
      'No to topology, Yes to varying delays'
    ],
    correct: 0,
    explanation: 'Yes, EdgeCloudSim allows arbitrary topologies (not restricted to trees) and supports network link delays that can vary during the simulation.'
  },
  {
    id: 116,
    topic: 'simulators',
    question: 'For EdgeCloudSim configuration, there are 3 files needed. Which are these?',
    options: [
      'Config, Topology, Applications',
      'Simulation, Network, Devices',
      'Applications, Placements, Allocations',
      'Topology, Applications, Output'
    ],
    correct: 0,
    explanation: 'EdgeCloudSim requires three configuration files: Config file (simulation parameters), Topology file (network structure), and Applications file (workload definition).'
  },
  {
    id: 117,
    topic: 'simulators',
    question: 'Regarding tutorials/documentation available for simulators, what can you say?',
    options: [
      'All have excellent documentation',
      'Documentation quality varies significantly between simulators',
      'None have documentation',
      'Only commercial simulators have docs'
    ],
    correct: 1,
    explanation: 'Documentation quality varies - some simulators (like iFogSim) have good tutorials, while others have limited or outdated documentation.'
  },
  {
    id: 118,
    topic: 'simulators',
    question: 'Regarding fault injection, which 2 simulators support it and allow adding/removing nodes arbitrarily?',
    options: [
      'iFogSim and EdgeCloudSim',
      'YAFS and EdgeCloudSim',
      'FogTorchπ and YAFS',
      'CloudSimSDN and EmuFog'
    ],
    correct: 1,
    explanation: 'YAFS and EdgeCloudSim support fault injection (simulating failures) and allow adding or removing nodes and links arbitrarily during simulation.'
  },
  {
    id: 119,
    topic: 'simulators',
    question: 'Regarding EmuFog, does it use Docker-based applications?',
    options: [
      'No, it uses VMs',
      'Yes, it uses Docker-based applications in emulation',
      'It uses both',
      'It doesn\'t use containers'
    ],
    correct: 1,
    explanation: 'Yes, EmuFog uses Docker-based applications in its emulation environment, running actual containerized applications.'
  },
  {
    id: 120,
    topic: 'simulators',
    question: 'Which simulators/emulators offer native mobility support?',
    options: [
      'iFogSim and EdgeCloudSim',
      'EdgeCloudSim and YAFS',
      'All of them',
      'None of them'
    ],
    correct: 1,
    explanation: 'EdgeCloudSim and YAFS offer native mobility support, allowing simulation of mobile devices and dynamic network topologies.'
  },
  {
    id: 121,
    topic: 'simulators',
    question: 'Which simulators offer the possibility to define models for monetary or energy consumption?',
    options: [
      'Only iFogSim',
      'iFogSim and EdgeCloudSim',
      'All simulators',
      'None of them'
    ],
    correct: 1,
    explanation: 'iFogSim and EdgeCloudSim offer models for both monetary cost and energy consumption, allowing cost and energy analysis.'
  },
  {
    id: 122,
    topic: 'simulators',
    question: 'How do simulators compare regarding CPU/Memory consumption?',
    options: [
      'All consume the same',
      'Consumption varies: abstract simulators (YAFS) use less, detailed (EmuFog) use more',
      'All are very efficient',
      'Consumption is not relevant'
    ],
    correct: 1,
    explanation: 'CPU/Memory consumption varies: abstract simulators (YAFS, FogTorchπ) use less resources, while detailed emulators (EmuFog) use more due to running actual code.'
  },
  {
    id: 123,
    topic: 'simulators',
    question: 'What is the main trade-off in fog computing simulation?',
    options: [
      'Cost vs complexity',
      'Accuracy vs performance',
      'Security vs speed',
      'Storage vs computation'
    ],
    correct: 1,
    explanation: 'The main trade-off is accuracy vs performance - detailed models provide accuracy but are computationally expensive, while abstract models run faster but may miss details.'
  },
  // ========== CONTAINERS (23 questions) ==========
  {
    id: 124,
    topic: 'containers',
    question: 'What is a container?',
    options: [
      'A virtual machine',
      'A lightweight, isolated environment for running applications',
      'A cloud service',
      'A network device'
    ],
    correct: 1,
    explanation: 'A container is a lightweight, isolated environment that packages an application with its dependencies, sharing the host OS kernel but isolated from other containers.'
  },
  {
    id: 125,
    topic: 'containers',
    question: 'What is a Docker container image?',
    options: [
      'A running container',
      'A read-only template used to create containers',
      'A Docker configuration file',
      'A container registry'
    ],
    correct: 1,
    explanation: 'A Docker container image is a read-only template with instructions for creating a container. Images become containers at runtime when instantiated.'
  },
  {
    id: 126,
    topic: 'containers',
    question: 'Is it correct to say that container images become containers at runtime?',
    options: [
      'No, they are always the same',
      'Yes, images are templates that become running containers',
      'Only for Docker',
      'Only in specific cases'
    ],
    correct: 1,
    explanation: 'Yes, container images are static templates. When you run an image, it becomes a running container instance.'
  },
  {
    id: 127,
    topic: 'containers',
    question: 'Do containers isolate software from its environment and ensure uniform operation?',
    options: [
      'No, they require identical environments',
      'Yes, containers provide isolation and consistent operation across different environments',
      'Only for specific applications',
      'Only in cloud environments'
    ],
    correct: 1,
    explanation: 'Yes, containers isolate software from the environment and ensure it works uniformly despite differences between development, staging, and production environments.'
  },
  {
    id: 128,
    topic: 'containers',
    question: 'In what engine do Docker Containers run?',
    options: [
      'VirtualBox',
      'Docker Engine',
      'Kubernetes',
      'VMware'
    ],
    correct: 1,
    explanation: 'Docker Containers run in the Docker Engine, which is the runtime that manages containers on the host system.'
  },
  {
    id: 129,
    topic: 'containers',
    question: 'What are the primitives leveraged by containers in the Linux world?',
    options: [
      'Virtual machines',
      'cgroups and namespaces',
      'Hypervisors',
      'Network switches'
    ],
    correct: 1,
    explanation: 'Containers leverage Linux primitives: cgroups (control groups for resource limits) and namespaces (for isolation of processes, network, filesystem, etc.).'
  },
  {
    id: 130,
    topic: 'containers',
    question: 'What are other container engines besides Docker Engine?',
    options: [
      'Only Docker exists',
      'Podman, containerd, CRI-O',
      'Kubernetes, Swarm',
      'VirtualBox, VMware'
    ],
    correct: 1,
    explanation: 'Other container engines include: Podman (daemonless), containerd (industry standard), and CRI-O (Kubernetes-focused).'
  },
  {
    id: 131,
    topic: 'containers',
    question: 'What are the main differences between Containers and Virtual Machines?',
    options: [
      'Containers are larger',
      'Containers share OS kernel, VMs each have full OS; Containers are lighter and start faster',
      'VMs are always better',
      'No significant differences'
    ],
    correct: 1,
    explanation: 'Containers share the host OS kernel (lighter, faster), while VMs each run a full OS (heavier, slower). Containers provide lighter isolation.'
  },
  {
    id: 132,
    topic: 'containers',
    question: 'Where are container images stored with Docker?',
    options: [
      'Only locally',
      'In Docker registries (Docker Hub, private registries)',
      'In cloud storage only',
      'In Git repositories'
    ],
    correct: 1,
    explanation: 'Container images are stored in Docker registries like Docker Hub (public) or private registries. Local copies are cached on the host.'
  },
  {
    id: 133,
    topic: 'containers',
    question: 'What is the timing taken when deploying a container?',
    options: [
      'Minutes to hours',
      'Seconds (much faster than VMs)',
      'Same as VMs',
      'Depends on image size only'
    ],
    correct: 1,
    explanation: 'Container deployment takes seconds, much faster than VMs which take minutes, because containers share the OS kernel and don\'t need to boot an OS.'
  },
  {
    id: 134,
    topic: 'containers',
    question: 'How is a Docker image identified?',
    options: [
      'By filename',
      'By name and tag (e.g., nginx:latest) or by digest',
      'By size only',
      'By creation date'
    ],
    correct: 1,
    explanation: 'Docker images are identified by name:tag (e.g., nginx:latest) or by cryptographic digest (SHA256 hash) for immutable identification.'
  },
  {
    id: 135,
    topic: 'containers',
    question: 'Where are copies of the latest deployed container images in Docker kept?',
    options: [
      'Only in registries',
      'In local image cache on the Docker host',
      'In cloud storage',
      'They are not cached'
    ],
    correct: 1,
    explanation: 'Copies of container images are kept in the local image cache on the Docker host, allowing faster subsequent deployments without re-downloading.'
  },
  {
    id: 136,
    topic: 'containers',
    question: 'Does Docker use a client-server architecture?',
    options: [
      'No, it is monolithic',
      'Yes, Docker client communicates with Docker daemon',
      'Only in enterprise versions',
      'Only for remote deployments'
    ],
    correct: 1,
    explanation: 'Yes, Docker uses client-server architecture: Docker client (CLI) sends commands to Docker daemon (server) which manages containers, images, networks, etc.'
  },
  {
    id: 137,
    topic: 'containers',
    question: 'Can you connect a Docker client to a remote Docker daemon?',
    options: [
      'No, they must be on same machine',
      'Yes, Docker client can connect to remote daemons',
      'Only via VPN',
      'Only in cloud environments'
    ],
    correct: 1,
    explanation: 'Yes, Docker client can connect to remote Docker daemons over network (using TCP/HTTPS), enabling remote container management.'
  },
  {
    id: 138,
    topic: 'containers',
    question: 'What is Kubernetes?',
    options: [
      'A container runtime',
      'A container orchestration platform',
      'A container image format',
      'A cloud provider'
    ],
    correct: 1,
    explanation: 'Kubernetes (K8s) is a container orchestration platform that automates deployment, scaling, and management of containerized applications.'
  },
  {
    id: 139,
    topic: 'containers',
    question: 'Does Docker Engine eliminate the "it works on my laptop!" problem?',
    options: [
      'No, the problem persists',
      'Yes, containers provide consistent environment across machines',
      'Only for specific applications',
      'Only in cloud environments'
    ],
    correct: 1,
    explanation: 'Yes, containers package applications with dependencies, providing consistent environment across development, testing, and production, eliminating "works on my machine" issues.'
  },
  {
    id: 140,
    topic: 'containers',
    question: 'What are the main steps in application development before and after containers?',
    options: [
      'No difference',
      'Before: environment-specific issues. After: package once, run anywhere',
      'Before: easier, After: more complex',
      'Before: cloud-only, After: local-only'
    ],
    correct: 1,
    explanation: 'Before containers: developers faced "works on my machine" issues. After containers: package application with dependencies once, run consistently anywhere.'
  },
  {
    id: 141,
    topic: 'containers',
    question: 'Which are 3 main Docker commands and their functionality?',
    options: [
      'docker run (start container), docker build (create image), docker ps (list containers)',
      'docker start, docker stop, docker restart',
      'docker create, docker delete, docker update',
      'docker install, docker uninstall, docker configure'
    ],
    correct: 0,
    explanation: 'Main commands: docker run (create/start container), docker build (build image from Dockerfile), docker ps (list running containers), docker images (list images), docker pull (download image).'
  },
  {
    id: 142,
    topic: 'containers',
    question: 'Does a bind must exist between a port in the local machine with the container port?',
    options: [
      'No, containers are always accessible',
      'Yes, for external access, local port must be bound to container port',
      'Only for web applications',
      'Only in production'
    ],
    correct: 1,
    explanation: 'Yes, to access a containerized application from outside, you must bind (map) a port on the local machine to a port in the container using -p flag.'
  },
  {
    id: 143,
    topic: 'containers',
    question: 'Can 2 or more containers in the same Docker Network communicate using their name?',
    options: [
      'No, they need IP addresses',
      'Yes, containers on same network can communicate using container names',
      'Only if using host network mode',
      'Only in bridge mode'
    ],
    correct: 1,
    explanation: 'Yes, containers in the same Docker network can communicate using container names (Docker provides DNS resolution), without needing localhost and port numbers.'
  },
  {
    id: 144,
    topic: 'containers',
    question: 'What is the Docker command to get the list of Docker Networks?',
    options: [
      'docker network list',
      'docker network ls',
      'docker networks',
      'docker list networks'
    ],
    correct: 1,
    explanation: 'The command is "docker network ls" (or "docker network list") to list all Docker networks.'
  },
  {
    id: 145,
    topic: 'containers',
    question: 'How many Docker Volume types are there? What are they?',
    options: [
      '2 types: bind mounts and volumes',
      '3 types: bind mounts, volumes, tmpfs mounts',
      '1 type: volumes only',
      '4 types: bind, volume, tmpfs, network'
    ],
    correct: 1,
    explanation: 'There are 3 Docker volume types: 1) Bind mounts (host path), 2) Volumes (managed by Docker), 3) tmpfs mounts (in-memory, Linux only).'
  },
  {
    id: 146,
    topic: 'containers',
    question: 'Will containers eventually replace full-blown server virtualization?',
    options: [
      'Yes, completely',
      'No, they serve different use cases and may coexist',
      'Only for small applications',
      'Only in cloud environments'
    ],
    correct: 1,
    explanation: 'Containers and VMs serve different needs. Containers are lighter for microservices, while VMs provide stronger isolation for multi-tenant scenarios. They will likely coexist.'
  }
];

// Achievements
export const achievements = [
  { id: 'first_study', title: 'Getting Started', description: 'Complete your first study session', icon: '🎯', points: 10 },
  { id: 'flashcard_10', title: 'Flashcard Master', description: 'Review 10 flashcards', icon: '🃏', points: 20 },
  { id: 'quiz_perfect', title: 'Perfect Score', description: 'Get 100% on a quiz', icon: '💯', points: 50 },
  { id: 'all_topics', title: 'Well Rounded', description: 'Study all 7 topics', icon: '🌟', points: 100 },
  { id: 'streak_3', title: '3-Day Streak', description: 'Study for 3 consecutive days', icon: '🔥', points: 30 },
  { id: 'quiz_master', title: 'Quiz Master', description: 'Complete 10 quizzes', icon: '🏆', points: 75 },
  { id: 'speed_demon', title: 'Speed Demon', description: 'Answer 10 questions in under 2 minutes', icon: '⚡', points: 40 },
  { id: 'knowledge_seeker', title: 'Knowledge Seeker', description: 'Read all subtopics in a topic', icon: '📚', points: 60 },
];

