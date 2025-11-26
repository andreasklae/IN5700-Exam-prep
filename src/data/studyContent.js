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

// Quiz questions
export const quizQuestions = [
  {
    id: 1,
    topic: 'intro-fog',
    question: 'Which of the following is NOT a key characteristic of fog computing?',
    options: [
      'Low latency',
      'Centralized architecture',
      'Location awareness',
      'Real-time interactions'
    ],
    correct: 1,
    explanation: 'Fog computing uses a distributed architecture, not centralized. Centralized architecture is characteristic of cloud computing.'
  },
  {
    id: 2,
    topic: 'intro-fog',
    question: 'In the three-tier fog computing architecture, what is the middle layer?',
    options: [
      'Cloud layer',
      'IoT/Edge layer',
      'Fog layer',
      'Application layer'
    ],
    correct: 2,
    explanation: 'The fog layer is between the cloud layer (top) and IoT/Edge layer (bottom), containing edge servers and gateways.'
  },
  {
    id: 3,
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
  {
    id: 4,
    topic: 'security',
    question: 'What is the primary challenge of implementing security in fog computing compared to cloud?',
    options: [
      'Cloud is inherently more secure',
      'Fog has fewer security tools available',
      'Distributed architecture increases attack surface',
      'Fog doesnt support encryption'
    ],
    correct: 2,
    explanation: 'The distributed nature of fog computing creates multiple attack surfaces across many nodes, making it harder to secure than centralized cloud architecture.'
  },
  {
    id: 5,
    topic: 'replication',
    question: 'What is the main advantage of eventual consistency over strong consistency?',
    options: [
      'Better data accuracy',
      'Higher availability and lower latency',
      'Simpler implementation',
      'No conflicts ever occur'
    ],
    correct: 1,
    explanation: 'Eventual consistency allows higher availability and lower latency by not requiring immediate synchronization, though it allows temporary inconsistencies.'
  },
  {
    id: 6,
    topic: 'replication',
    question: 'In active replication, how are client requests handled?',
    options: [
      'Only the primary replica processes them',
      'Requests are queued until synchronization',
      'All replicas process requests simultaneously',
      'A random replica is selected'
    ],
    correct: 2,
    explanation: 'Active replication means all replicas process client requests simultaneously, providing fault tolerance but requiring more resources.'
  },
  {
    id: 7,
    topic: 'cyberforaging',
    question: 'What is the primary benefit of cyberforaging for mobile devices?',
    options: [
      'Increased storage capacity',
      'Extended battery life and better performance',
      'Improved screen quality',
      'Better network connectivity'
    ],
    correct: 1,
    explanation: 'Cyberforaging extends battery life by offloading computation-intensive tasks to more powerful servers, also improving performance.'
  },
  {
    id: 8,
    topic: 'cyberforaging',
    question: 'What latency range does Mobile Edge Computing (MEC) typically provide?',
    options: [
      '100-500ms',
      '50-100ms',
      '10-50ms',
      '1-10ms'
    ],
    correct: 3,
    explanation: 'MEC provides ultra-low latency of 1-10ms by placing compute resources at base stations, essential for real-time applications like AR/VR.'
  },
  {
    id: 9,
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
  {
    id: 10,
    topic: 'load-balancing',
    question: 'What does the Earliest Deadline First (EDF) scheduling algorithm prioritize?',
    options: [
      'Shortest tasks first',
      'Tasks with nearest deadlines',
      'Tasks from highest priority users',
      'Longest waiting tasks'
    ],
    correct: 1,
    explanation: 'EDF schedules tasks with the nearest deadlines first, making it suitable for real-time systems with time constraints.'
  },
  {
    id: 11,
    topic: 'simulators',
    question: 'Which simulator is built on top of CloudSim and specifically designed for fog computing?',
    options: [
      'FogNetSim++',
      'YAFS',
      'iFogSim',
      'EdgeCloudSim'
    ],
    correct: 2,
    explanation: 'iFogSim extends CloudSim specifically for fog computing, adding models for fog devices, applications, and energy consumption.'
  },
  {
    id: 12,
    topic: 'simulators',
    question: 'What is the main trade-off in fog computing simulation?',
    options: [
      'Cost vs complexity',
      'Accuracy vs performance',
      'Security vs speed',
      'Storage vs computation'
    ],
    correct: 1,
    explanation: 'Detailed models provide accuracy but are computationally expensive, while abstract models run faster but may miss important details.'
  },
  {
    id: 13,
    topic: 'containers',
    question: 'What do Docker containers share with the host system?',
    options: [
      'Nothing, they are fully isolated',
      'The OS kernel',
      'All system resources',
      'Only the network interface'
    ],
    correct: 1,
    explanation: 'Docker containers share the host OS kernel, which makes them lightweight compared to VMs that each run a full OS.'
  },
  {
    id: 14,
    topic: 'containers',
    question: 'What is the primary function of Kubernetes?',
    options: [
      'Creating container images',
      'Writing Dockerfiles',
      'Orchestrating and managing containers at scale',
      'Compiling applications'
    ],
    correct: 2,
    explanation: 'Kubernetes orchestrates containers at scale, handling deployment, scaling, healing, service discovery, and load balancing.'
  },
  {
    id: 15,
    topic: 'containers',
    question: 'Why are containers particularly well-suited for fog computing?',
    options: [
      'They are larger and more secure',
      'They require more resources',
      'They are portable, lightweight, and fast to deploy',
      'They only work on cloud servers'
    ],
    correct: 2,
    explanation: 'Containers are ideal for fog computing due to their portability, lightweight nature, fast deployment, and consistent environment across diverse edge devices.'
  },
  {
    id: 16,
    topic: 'intro-fog',
    question: 'Which use case does NOT typically benefit from fog computing?',
    options: [
      'Autonomous vehicles',
      'Batch data analytics with no time constraints',
      'Smart city traffic management',
      'Remote patient monitoring'
    ],
    correct: 1,
    explanation: 'Batch data analytics without time constraints is better suited for cloud computing. Fog excels at time-sensitive, location-aware applications.'
  },
  {
    id: 17,
    topic: 'security',
    question: 'What is Role-Based Access Control (RBAC)?',
    options: [
      'Access based on physical location',
      'Access based on time of day',
      'Access based on user roles and permissions',
      'Random access control'
    ],
    correct: 2,
    explanation: 'RBAC grants access permissions based on user roles within an organization, simplifying access management by grouping permissions.'
  },
  {
    id: 18,
    topic: 'replication',
    question: 'What problem do Conflict-free Replicated Data Types (CRDTs) solve?',
    options: [
      'High latency',
      'Storage limitations',
      'Automatic conflict resolution in replicated data',
      'Network bandwidth'
    ],
    correct: 2,
    explanation: 'CRDTs are designed to automatically resolve conflicts in replicated data without requiring complex coordination or conflict resolution algorithms.'
  },
  {
    id: 19,
    topic: 'cyberforaging',
    question: 'What is "soft state" in the context of cloudlets?',
    options: [
      'Unreliable state',
      'Temporary state with no permanent storage',
      'Partially synchronized state',
      'Encrypted state'
    ],
    correct: 1,
    explanation: 'Soft state means cloudlets dont maintain permanent storage; data is temporary and can be recreated, allowing for flexible resource usage.'
  },
  {
    id: 20,
    topic: 'containers',
    question: 'What is K3s?',
    options: [
      'A container image format',
      'A lightweight Kubernetes distribution for edge devices',
      'A Docker alternative',
      'A cloud storage service'
    ],
    correct: 1,
    explanation: 'K3s is a lightweight Kubernetes distribution designed for resource-constrained environments like edge and IoT devices, maintaining K8s compatibility with smaller footprint.'
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

