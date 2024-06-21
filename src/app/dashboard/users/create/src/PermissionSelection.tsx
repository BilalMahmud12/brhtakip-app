import React from 'react';
import { Box, Checkbox, FormControl, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { features, abstractPermissions, abstractPermissionsTurkish, featuresTurkish, Permission, Feature, AbstractPermission } from '@/config/index';

interface PermissionSelectionProps {
    selectedPermissions: Permission[];
    setSelectedPermissions: React.Dispatch<React.SetStateAction<Permission[]>>;
}

const PermissionSelection: React.FC<PermissionSelectionProps> = ({
    selectedPermissions = [],
    setSelectedPermissions
}) => {
    const handleCheckboxChange = (feature: Feature, action: AbstractPermission) => {
        const permission: Permission = `${action}_${feature.toUpperCase()}` as Permission;
        setSelectedPermissions((prevPermissions) => {
            if (prevPermissions.includes(permission)) {
                return prevPermissions.filter((perm) => perm !== permission);
            } else {
                return [...prevPermissions, permission];
            }
        });
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
