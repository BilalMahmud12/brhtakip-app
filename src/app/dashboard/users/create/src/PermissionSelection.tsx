import React from 'react';
import { Box, Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { features, abstractPermissions, featuresTurkish, Permission, Feature, AbstractPermission } from '@/config/index';

interface PermissionSelectionProps {
    selectedPermissions: Permission[];
    handleSelectedPermissions: (updatedPermissions: Permission[]) => void;
}

const PermissionSelection: React.FC<PermissionSelectionProps> = ({
    selectedPermissions = [],
    handleSelectedPermissions
}) => {
    const handleCheckboxChange = (feature: Feature, action: AbstractPermission) => {
        const permission: Permission = `${action}_${feature.toUpperCase()}` as Permission;
        const updatedPermissions = selectedPermissions.includes(permission)
            ? selectedPermissions.filter((perm) => perm !== permission)
            : [...selectedPermissions, permission];

        handleSelectedPermissions(updatedPermissions);
    };

    return (
        <Box>
            <TableContainer component={Paper}>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ width: '88%', padding: '16px 16px' }}>Özellik</TableCell>
                            <TableCell sx={{ width: '3%', fontSize: '11px' }} align="center">Görüntüle</TableCell>
                            <TableCell sx={{ width: '3%', fontSize: '11px' }} align="center">Oluştur</TableCell>
                            <TableCell sx={{ width: '3%', fontSize: '11px' }} align="center">Güncelle</TableCell>
                            <TableCell sx={{ width: '3%', fontSize: '11px' }} align="center">Sil</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {features.map((feature) => (
                            <TableRow key={feature}>
                                <TableCell sx={{ padding: '0 0 0 1rem' }}>{featuresTurkish[feature]}</TableCell>
                                {Object.keys(abstractPermissions).map((action) => (
                                    <TableCell key={`${action}_${feature}`} align="center" sx={{ padding: '0' }}>
                                        <Checkbox
                                            checked={selectedPermissions.includes(`${action}_${feature.toUpperCase()}` as Permission)}
                                            onChange={() => handleCheckboxChange(feature, action as AbstractPermission)}
                                            name={`${action}_${feature}`}
                                        />
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default PermissionSelection;
