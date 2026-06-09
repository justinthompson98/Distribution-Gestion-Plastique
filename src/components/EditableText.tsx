import React, { createContext, useContext } from 'react';

// Create a minimal empty fallback context to satisfy typescript/compilation imports
interface EditableContextType {
  isEditMode: boolean;
  setEditMode: (val: boolean) => void;
  texts: Record<string, string>;
  updateText: (key: string, newValue: string) => void;
  resetAll: () => void;
}

const EditableContext = createContext<EditableContextType | undefined>(undefined);

export function EditableProvider({ children }: { children: React.ReactNode }) {
  return (
    <EditableContext.Provider 
      value={{ 
        isEditMode: false, 
        setEditMode: () => {}, 
        texts: {}, 
        updateText: () => {}, 
        resetAll: () => {} 
      }}
    >
      {children}
    </EditableContext.Provider>
  );
}

export function useEditable() {
  const context = useContext(EditableContext);
  if (!context) {
    throw new Error('useEditable must be used within an EditableProvider');
  }
  return context;
}

interface EditableTextProps {
  id: string;
  defaultText: string;
  as?: React.ElementType;
  className?: string;
  isHtml?: boolean;
}

export function EditableText({ defaultText, as: Tag = 'span', className = '', isHtml = false }: EditableTextProps) {
  if (isHtml) {
    return (
      <Tag
        className={className}
        dangerouslySetInnerHTML={{ __html: defaultText }}
      />
    );
  }

  return (
    <Tag className={className}>
      {defaultText}
    </Tag>
  );
}
