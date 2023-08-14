{
    "domains": [
      {
        "name": "Web Infrastructure",
        "use_cases": [
          {
            "name": "Web Application Deployment",
            "fields": [
              {
                "name": "application_name",
                "description": "Name of the web application",
                "type": "string"
              },
              {
                "name": "git_repo",
                "description": "URL of the Git repository",
                "type": "string"
              },
              {
                "name": "server_type",
                "description": "Type of server to deploy on",
                "type": "string"
              }
            ],
            "questions": [
              {
                "text": "What is the name of your web application?",
                "sample_answer": "MyAwesomeApp"
              },
              {
                "text": "Provide the Git repository URL for your application.",
                "sample_answer": "https://github.com/user/repo.git"
              },
              {
                "text": "Do you want to deploy on a production or staging server?",
                "sample_answer": "Staging server"
              },
              {
                "text": "Are there any environment-specific configurations for your application?",
                "sample_answer": "Yes, I need to set different database connections."
              }
            ]
          },
          {
            "name": "Load Balancer Configuration",
            "fields": [
              {
                "name": "lb_name",
                "description": "Name of the load balancer",
                "type": "string"
              },
              {
                "name": "backend_servers",
                "description": "List of backend server IPs",
                "type": "array"
              },
              {
                "name": "health_check_url",
                "description": "URL for health checks",
                "type": "string"
              }
            ],
            "questions": [
              {
                "text": "What is the name of your load balancer?",
                "sample_answer": "MyLoadBalancer"
              },
              {
                "text": "Provide the IPs of backend servers to balance.",
                "sample_answer": "[\"10.0.0.1\", \"10.0.0.2\"]"
              },
              {
                "text": "What URL should be used for health checks?",
                "sample_answer": "/health"
              },
              {
                "text": "Do you want to enable session persistence?",
                "sample_answer": "Yes, please enable session persistence."
              }
            ]
          }
        ]
      },
      {
        "name": "Database Management",
        "use_cases": [
          {
            "name": "Database Provisioning",
            "fields": [
              {
                "name": "db_name",
                "description": "Name of the database",
                "type": "string"
              },
              {
                "name": "db_engine",
                "description": "Database engine to use",
                "type": "string"
              },
              {
                "name": "db_user",
                "description": "Username for the database",
                "type": "string"
              }
            ],
            "questions": [
              {
                "text": "What is the name of the database you want to create?",
                "sample_answer": "mydb"
              },
              {
                "text": "Which database engine would you like to use?",
                "sample_answer": "PostgreSQL"
              },
              {
                "text": "Provide a username for the database.",
                "sample_answer": "dbuser"
              },
              {
                "text": "Do you want to set a password for the database user?",
                "sample_answer": "Yes, please set a password."
              }
            ]
          },
          {
            "name": "Database Backup and Restoration",
            "fields": [
              {
                "name": "backup_name",
                "description": "Name of the backup",
                "type": "string"
              },
              {
                "name": "backup_type",
                "description": "Type of backup (full/incremental)",
                "type": "string"
              },
              {
                "name": "restore_point",
                "description": "Timestamp or label for the restore point",
                "type": "string"
              }
            ],
            "questions": [
              {
                "text": "What should be the name of the backup?",
                "sample_answer": "db_backup_2023-08-14"
              },
              {
                "text": "Do you want to perform a full or incremental backup?",
                "sample_answer": "Incremental backup"
              },
              {
                "text": "Provide a timestamp or label for the restore point.",
                "sample_answer": "2023-08-10"
              },
              {
                "text": "Should the backup files be compressed?",
                "sample_answer": "Yes, please compress the backup files."
              }
            ]
          }
        ]
      },
      {
        "name": "Network Automation",
        "use_cases": [
          {
            "name": "Firewall Rule Management",
            "fields": [
              {
                "name": "rule_name",
                "description": "Name of the firewall rule",
                "type": "string"
              },
              {
                "name": "source_ip",
                "description": "Source IP address",
                "type": "string"
              },
              {
                "name": "destination_ip",
                "description": "Destination IP address",
                "type": "string"
              }
            ],
            "questions": [
              {
                "text": "What should be the name of the firewall rule?",
                "sample_answer": "Allow_HTTP"
              },
              {
                "text": "Specify the source IP address for the rule.",
                "sample_answer": "192.168.1.10"
              },
              {
                "text": "Provide the destination IP address for the rule.",
                "sample_answer": "10.0.0.1"
              },
              {
                "text": "Should this rule allow incoming and outgoing traffic?",
                "sample_answer": "No, only incoming."
              }
            ]
          },
          {
            "name": "Network Device Configuration",
            "fields": [
              {
                "name": "device_name",
                "description": "Name of the network device",
                "type": "string"
              },
              {
                "name": "config_template",
                "description": "Configuration template file",
                "type": "string"
              },
              {
                "name": "variables",
                "description": "Variables for template rendering",
                "type": "object"
              }
            ],
            "questions": [
              {
                "text": "What is the name of the network device?",
                "sample_answer": "Router1"
              },
              {
                "text": "Provide the path to the configuration template file.",
                "sample_answer": "/path/to/template.j2"
              },
              {
                "text": "List any variables needed for template rendering.",
                "sample_answer": "{\"interface\": \"eth0\", \"ip_address\": \"192.168.1.1\"}"
              },
              {
                "text": "Do you want to preview the configuration changes before applying?",
                "sample_answer": "Yes, please show a preview."
              }
            ]
          }
        ]
      },
      {
        "name": "Server Provisioning",
        "use_cases": [
          {
            "name": "VM Creation and Configuration",
            "fields": [
              {
                "name": "vm_name",
                "description": "Name of the virtual machine",
                "type": "string"
              },
              {
                "name": "vm_image",
                "description": "Operating system image",
                "type": "string"
              },
              {
                "name": "vm_resources",
                "description": "CPU, memory, and disk allocation",
                "type": "object"
              }
            ],
            "questions": [
              {
                "text": "What should be the name of the virtual machine?",
                "sample_answer": "MyVM"
              },
              {
                "text": "Specify the operating system image for the VM.",
                "sample_answer": "Ubuntu 20.04"
              },
              {
                "text": "Allocate resources: CPUs, memory, and disk (GB).",
                "sample_answer": "{\"cpus\": 2, \"memory\": 4096, \"disk\": 50}"
              },
              {
                "text": "Should the VM be started automatically after creation?",
                "sample_answer": "Yes, auto-start the VM."
              }
            ]
          },
          {
            "name": "Configuration Management",
            "fields": [
              {
                "name": "server_name",
                "description": "Name of the server",
                "type": "string"
              },
              {
                "name": "config_files",
                "description": "List of configuration files",
                "type": "array"
              },
              {
                "name": "restart_service",
                "description": "Service to restart after configuration changes",
                "type": "string"
              }
            ],
            "questions": [
              {
                "text": "What is the name of the server you want to configure?",
                "sample_answer": "AppServer1"
              },
              {
                "text": "Provide a list of configuration files to manage.",
                "sample_answer": "[\"/etc/app/config.conf\", \"/etc/app/database.ini\"]"
              },
              {
                "text": "Which service should be restarted after configuration changes?",
                "sample_answer": "app-service"
              },
              {
                "text": "Do you want to back up existing config files before making changes?",
                "sample_answer": "Yes, please create backups."
              }
            ]
          }
        ]
      },
      {
        "name": "Security and Compliance",
        "use_cases": [
          {
            "name": "Security Patch Management",
            "fields": [
              {
                "name": "server_group",
                "description": "Group of servers to patch",
                "type": "string"
              },
              {
                "name": "patch_schedule",
                "description": "Patch schedule (e.g., weekly, monthly)",
                "type": "string"
              },
              {
                "name": "reboot_required",
                "description": "Is a reboot required after patching?",
                "type": "boolean"
              }
            ],
            "questions": [
              {
                "text": "Which server group should receive security patches?",
                "sample_answer": "ProductionServers"
              },
              {
                "text": "Specify the patch schedule (e.g., weekly, monthly).",
                "sample_answer": "Monthly"
              },
              {
                "text": "Is a reboot required after applying patches?",
                "sample_answer": "Yes, a reboot is required."
              },
              {
                "text": "Do you want to exclude any specific patches?",
                "sample_answer": "Exclude patches related to a specific application."
              }
            ]
          },
          {
            "name": "Compliance Configuration",
            "fields": [
              {
                "name": "server_name",
                "description": "Name of the server",
                "type": "string"
              },
              {
                "name": "compliance_policy",
                "description": "Name of the compliance policy",
                "type": "string"
              },
              {
                "name": "audit_frequency",
                "description": "Frequency of compliance audits",
                "type": "string"
              }
            ],
            "questions": [
              {
                "text": "What is the name of the server you want to configure for compliance?",
                "sample_answer": "SecureServer"
              },
              {
                "text": "Provide the name of the compliance policy to enforce.",
                "sample_answer": "PCI-DSS"
              },
              {
                "text": "How often should compliance audits be conducted?",
                "sample_answer": "Quarterly"
              },
              {
                "text": "Do you want to receive email notifications for audit results?",
                "sample_answer": "Yes, send email notifications."
              }
            ]
          }
        ]
      }
    ]
  }
  