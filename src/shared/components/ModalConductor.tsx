import { useAppSelector } from "../../store/hooks";
import { AddTaskModal } from "../../features/tasks/components/addTask";
import { MODAL } from "../../store/ui/constants";
import type { ModalType } from "../../store/ui/constants";


export function GlobalModals() {
  const modal = useAppSelector((state) => state.ui.modal) as ModalType;

  if (!modal) return null;

  const COMPONENTS: Record<NonNullable<ModalType>, React.FC> = {
    [MODAL.ADD_TASK]: AddTaskModal,
  };

  const Component = COMPONENTS[modal];
  if (!Component) return null;
  return <Component />;
}