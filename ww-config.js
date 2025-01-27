export default {
  editor: {
    label: {
      en: "Gantt Chart",
    }
  },
  properties: {
    tasks: {
      label: {
        en: "Tasks",
      },
      type: "Array",
      options: {
        item: {
          type: "Object",
          options: {
            item: {
              name: {
                label: { en: "Task Name" },
                type: "Text",
                defaultValue: "New Task"
              },
              startDate: {
                label: { en: "Start Date" },
                type: "Text",
                defaultValue: new Date().toISOString().split('T')[0]
              },
              endDate: {
                label: { en: "End Date" },
                type: "Text",
                defaultValue: new Date().toISOString().split('T')[0]
              },
              color: {
                label: { en: "Color" },
                type: "Color",
                defaultValue: "#4A90E2"
              }
            }
          }
        }
      },
      defaultValue: [
        {
          name: "Task 1",
          startDate: "2024-03-01",
          endDate: "2024-03-05",
          color: "#4A90E2"
        },
        {
          name: "Task 2",
          startDate: "2024-03-03",
          endDate: "2024-03-08",
          color: "#50E3C2"
        }
      ]
    }
  }
}; 