export const createController = function (moduleName: string, controllerName: string) {
  const value = `module ${moduleName}
    module CONTROLLER
      class ${controllerName} < Shivneri::Controller
        @[DefaultWorker]
        def default_worker
          text_result("Welcome to Shivneri")
        end
      end
    end
  end
  `
}