export default {
  editor: {
    label: {
      en: "Gantt Chart",
    }
  },
  properties: {
    headerText: {
      hidden: true,
      defaultValue: { 
        isWwObject: true, 
        type: 'ww-text',
        content: {
          text: 'Tasks'
        }
      }
    },
    dateText: {
      hidden: true,
      defaultValue: { 
        isWwObject: true, 
        type: 'ww-text',
        content: {
          text: ''
        }
      }
    },
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
              nameElement: {
                hidden: true,
                defaultValue: { isWwObject: true, type: 'ww-text' }
              },
              name: {
                label: { en: "Task Name" },
                type: "Text",
                defaultValue: "New Task",
                bindable: true
              },
              startDate: {
                label: { en: "Start Date" },
                type: "Dropzone",
                options: {
                  type: "Date",
                  format: "YYYY-MM-DD"
                },
                defaultValue: new Date().toISOString().split('T')[0]
              },
              endDate: {
                label: { en: "End Date" },
                type: "Dropzone",
                options: {
                  type: "Date",
                  format: "YYYY-MM-DD"
                },
                defaultValue: new Date().toISOString().split('T')[0]
              },
              color: {
                label: { en: "Color" },
                type: "Color",
                defaultValue: "#4A90E2",
                bindable: true
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
          color: "#4A90E2",
          nameElement: { isWwObject: true, type: 'ww-text' }
        },
        {
          name: "Task 2",
          startDate: "2024-03-03",
          endDate: "2024-03-08",
          color: "#50E3C2",
          nameElement: { isWwObject: true, type: 'ww-text' }
        }
      ]
    }
  }
}; 